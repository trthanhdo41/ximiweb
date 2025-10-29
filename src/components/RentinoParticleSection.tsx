"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export const XimiTechParticleSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  const [hasRotated, setHasRotated] = useState(false)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    points: THREE.Points
    geometry: THREE.BufferGeometry
    originalPositions: Float32Array
    velocities: Float32Array
    phases: Float32Array
    intersectionPoint: THREE.Vector3 | null
    rotationX: number
    rotationY: number
    isDragging: boolean
    previousMouseX: number
    previousMouseY: number
    particleCount: number
  } | null>(null)

  const clamp = (value: number, min: number, max: number) => {
    return Math.max(min, Math.min(max, value))
  }

  // Generate particles from text - chỉ RENTINO
  const generateTextParticles = (text: string, numParticles: number) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    canvas.width = 1200
    canvas.height = 400
    
    ctx.fillStyle = 'white'
    ctx.font = 'bold 280px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, canvas.width / 2, canvas.height / 2)
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const positions: number[] = []
    
    // Sample pixels
    for (let i = 0; i < numParticles * 100 && positions.length < numParticles * 3; i++) {
      const x = Math.floor(Math.random() * canvas.width)
      const y = Math.floor(Math.random() * canvas.height)
      const index = (y * canvas.width + x) * 4
      
      if (imageData.data[index + 3] > 128) {
        // Map to 3D space
        const x3d = (x / canvas.width - 0.5) * 5
        const y3d = -(y / canvas.height - 0.5) * 2.5
        const z3d = (Math.random() - 0.5) * 0.2
        
        positions.push(x3d, y3d, z3d)
      }
    }
    
    return new Float32Array(positions)
  }

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    const canvas = canvasRef.current
    const container = containerRef.current
    const width = container.clientWidth
    const height = 600

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })

    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 1)

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)

    // Generate particles from "XIMITECH" text
    const numParticles = 20000
    const positions = generateTextParticles('XIMITECH', numParticles)
    const particleCount = positions.length / 3

    const colors = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      // XimiTech cyan color
      colors[i * 3] = 0.0      // R
      colors[i * 3 + 1] = 0.83 // G  
      colors[i * 3 + 2] = 1.0  // B
    }

    const originalPositions = positions.slice()
    const phases = new Float32Array(particleCount)
    const velocities = new Float32Array(particleCount * 3)

    for (let j = 0; j < particleCount; j++) {
      phases[j] = Math.random() * Math.PI * 2
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.014,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)
    camera.position.set(0, 0, 2.0)

    sceneRef.current = {
      scene,
      camera,
      renderer,
      points,
      geometry,
      originalPositions,
      velocities,
      phases,
      intersectionPoint: null,
      rotationX: 0,
      rotationY: 0,
      isDragging: false,
      previousMouseX: 0,
      previousMouseY: 0,
      particleCount,
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!sceneRef.current) return

      const rect = canvas.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersect = new THREE.Vector3()
      if (raycaster.ray.intersectPlane(plane, intersect)) {
        sceneRef.current.intersectionPoint = intersect
      }
    }

    const handleMouseLeave = () => {
      if (sceneRef.current) {
        sceneRef.current.intersectionPoint = null
      }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    let animationId: number
    const animate = (time: number) => {
      if (!sceneRef.current) return

      time *= 0.001

      const {
        geometry,
        points,
        originalPositions,
        velocities,
        phases,
        intersectionPoint,
        rotationX,
        rotationY,
        particleCount,
      } = sceneRef.current

      const positionAttribute = geometry.getAttribute("position") as THREE.BufferAttribute
      const colorAttribute = geometry.getAttribute("color") as THREE.BufferAttribute

      const radiusSwirl = 0.01
      const angularSpeed = 1
      const effectRadius = 0.4

      // Fixed effect: "default" (tản nhẹ)
      const repelStrength = 0.05
      const attractStrength = 0.05
      const damping = 0.95

      points.rotation.y += (rotationY - points.rotation.y) * 0.1
      points.rotation.x += (rotationX - points.rotation.x) * 0.1

      const euler = new THREE.Euler(points.rotation.x, points.rotation.y, points.rotation.z, "XYZ")
      const inverseQuaternion = new THREE.Quaternion().setFromEuler(euler).invert()

      let localIntersection: THREE.Vector3 | null = null
      if (intersectionPoint) {
        localIntersection = intersectionPoint.clone().applyQuaternion(inverseQuaternion)
      }

      for (let j = 0; j < particleCount; j++) {
        const idx = j * 3
        const ox = originalPositions[idx]
        const oy = originalPositions[idx + 1]
        const oz = originalPositions[idx + 2]

        const theta = angularSpeed * time + phases[j]
        const swirlDx = radiusSwirl * Math.cos(theta)
        const swirlDy = radiusSwirl * Math.sin(theta)

        const targetX = ox + swirlDx
        const targetY = oy + swirlDy
        const targetZ = oz

        let px = positionAttribute.getX(j)
        let py = positionAttribute.getY(j)
        let pz = positionAttribute.getZ(j)

        let vx = velocities[idx]
        let vy = velocities[idx + 1]
        let vz = velocities[idx + 2]

        if (localIntersection) {
          const dx = px - localIntersection.x
          const dy = py - localIntersection.y
          const dz = pz - localIntersection.z
          const distSq = dx * dx + dy * dy + dz * dz
          const dist = Math.sqrt(distSq)

          // Default effect: light scatter
          if (distSq < effectRadius * effectRadius && distSq > 0.0001) {
            const force = (1 - dist / effectRadius) * repelStrength
            vx += (dx / dist) * force
            vy += (dy / dist) * force
            vz += (dz / dist) * force
          }
        }

        const attractDx = targetX - px
        const attractDy = targetY - py
        const attractDz = targetZ - pz
        vx += attractDx * attractStrength
        vy += attractDy * attractStrength
        vz += attractDz * attractStrength

        vx *= damping
        vy *= damping
        vz *= damping

        px += vx
        py += vy
        pz += vz

        positionAttribute.setXYZ(j, px, py, pz)

        velocities[idx] = vx
        velocities[idx + 1] = vy
        velocities[idx + 2] = vz

        // Keep cyan color constant
        colorAttribute.setXYZ(j, 0.0, 0.83, 1.0)
      }

      positionAttribute.needsUpdate = true
      colorAttribute.needsUpdate = true

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    const handleResize = () => {
      if (!sceneRef.current || !containerRef.current) return
      const newWidth = containerRef.current.clientWidth
      camera.aspect = newWidth / height
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener('resize', handleResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  // Auto rotate khi scroll vào view
  useEffect(() => {
    if (isVisible && !hasRotated && sceneRef.current) {
      setHasRotated(true)
      
      const targetRotation = Math.PI * 2 // 360 degrees
      const duration = 3000 // 3 seconds
      const startTime = Date.now()
      const startRotation = sceneRef.current.rotationY

      const animate = () => {
        if (!sceneRef.current) return
        
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeInOutCubic = (t: number) => 
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        
        sceneRef.current.rotationY = startRotation + targetRotation * easeInOutCubic(progress)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      animate()
    }
  }, [isVisible, hasRotated])

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!sceneRef.current) return
    sceneRef.current.isDragging = true
    sceneRef.current.previousMouseX = event.clientX
    sceneRef.current.previousMouseY = event.clientY
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!sceneRef.current || !sceneRef.current.isDragging) return

    const deltaX = event.clientX - sceneRef.current.previousMouseX
    const deltaY = event.clientY - sceneRef.current.previousMouseY

    sceneRef.current.rotationY -= deltaX * 0.005
    sceneRef.current.rotationX -= deltaY * 0.005

    sceneRef.current.previousMouseX = event.clientX
    sceneRef.current.previousMouseY = event.clientY
  }

  const handleMouseUp = () => {
    if (sceneRef.current) {
      sceneRef.current.isDragging = false
    }
  }

  return (
    <section ref={sectionRef} className="relative py-0 bg-black overflow-hidden">
      <div 
        ref={containerRef} 
        className="w-full"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-[600px] cursor-move"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </div>
    </section>
  )
}

