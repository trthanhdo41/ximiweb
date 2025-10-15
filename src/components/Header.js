import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import Button from './ui/Button';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${props => props.theme.zIndex.sticky};
  background: ${props => props.isScrolled 
    ? props.theme.colors.background 
    : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.isScrolled 
    ? `1px solid ${props.theme.colors.border}` 
    : 'none'};
  transition: all 0.3s ease;
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const Logo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  h2 {
    margin: 0;
    font-size: ${props => props.theme.typography.fontSize['2xl']};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.primary};
    line-height: 1;
  }

  span {
    font-size: ${props => props.theme.typography.fontSize.sm};
    color: ${props => props.theme.colors.textSecondary};
    font-weight: ${props => props.theme.typography.fontWeight.medium};
    margin-top: -4px;
  }
`;

const Nav = styled(motion.nav)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${props => props.theme.colors.textPrimary};
  text-decoration: none;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  font-size: ${props => props.theme.typography.fontSize.base};
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.accent};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.textPrimary};
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.background};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  backdrop-filter: blur(10px);
  z-index: ${props => props.theme.zIndex.dropdown};
`;

const MobileNav = styled.div`
  padding: ${props => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const MobileNavLink = styled(motion.a)`
  color: ${props => props.theme.colors.textPrimary};
  text-decoration: none;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  font-size: ${props => props.theme.typography.fontSize.lg};
  padding: ${props => props.theme.spacing.md} 0;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const openZalo = () => {
    window.open('https://zalo.me/0888889805', '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <HeaderContainer
        isScrolled={isScrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeaderContent>
          <Logo
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2>XimiWeb</h2>
            <span>Giải pháp IT</span>
          </Logo>

          <Nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <NavLink
              href="#home"
              onClick={() => scrollToSection('home')}
              whileHover={{ y: -2 }}
            >
              Trang chủ
            </NavLink>
            <NavLink
              href="#services"
              onClick={() => scrollToSection('services')}
              whileHover={{ y: -2 }}
            >
              Dịch vụ
            </NavLink>
            <NavLink
              href="#tech-stack"
              onClick={() => scrollToSection('tech-stack')}
              whileHover={{ y: -2 }}
            >
              Công nghệ
            </NavLink>
            <NavLink
              href="#about"
              onClick={() => scrollToSection('about')}
              whileHover={{ y: -2 }}
            >
              Về chúng tôi
            </NavLink>
            <NavLink
              href="#charts"
              onClick={() => scrollToSection('charts')}
              whileHover={{ y: -2 }}
            >
              Thống kê
            </NavLink>
            <NavLink
              href="#contact"
              onClick={() => scrollToSection('contact')}
              whileHover={{ y: -2 }}
            >
              Liên hệ
            </NavLink>
          </Nav>

          <HeaderActions>
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('contact')}
              style={{ display: 'none' }}
              className="desktop-cta"
            >
              Tư vấn miễn phí
            </Button>
            <MobileMenuButton
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <HiXMark /> : <HiBars3 />}
            </MobileMenuButton>
          </HeaderActions>
        </HeaderContent>
      </HeaderContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNav>
              <MobileNavLink
                href="#home"
                onClick={() => scrollToSection('home')}
                whileHover={{ x: 10 }}
              >
                Trang chủ
              </MobileNavLink>
              <MobileNavLink
                href="#services"
                onClick={() => scrollToSection('services')}
                whileHover={{ x: 10 }}
              >
                Dịch vụ
              </MobileNavLink>
              <MobileNavLink
                href="#tech-stack"
                onClick={() => scrollToSection('tech-stack')}
                whileHover={{ x: 10 }}
              >
                Công nghệ
              </MobileNavLink>
              <MobileNavLink
                href="#about"
                onClick={() => scrollToSection('about')}
                whileHover={{ x: 10 }}
              >
                Về chúng tôi
              </MobileNavLink>
              <MobileNavLink
                href="#charts"
                onClick={() => scrollToSection('charts')}
                whileHover={{ x: 10 }}
              >
                Thống kê
              </MobileNavLink>
              <MobileNavLink
                href="#contact"
                onClick={() => scrollToSection('contact')}
                whileHover={{ x: 10 }}
              >
                Liên hệ
              </MobileNavLink>
              <div style={{ marginTop: '1rem' }}>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => scrollToSection('contact')}
                >
                  Tư vấn miễn phí
                </Button>
              </div>
            </MobileNav>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;