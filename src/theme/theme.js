// XimiWeb Theme System - Light/Dark Mode
export const lightTheme = {
  colors: {
    // Primary Colors
    primary: '#2563eb', // Blue-600
    primaryHover: '#1d4ed8', // Blue-700
    primaryLight: '#dbeafe', // Blue-100
    primaryDark: '#1e40af', // Blue-800
    
    // Secondary Colors
    secondary: '#7c3aed', // Violet-600
    secondaryHover: '#6d28d9', // Violet-700
    secondaryLight: '#ede9fe', // Violet-100
    
    // Accent Colors
    accent: '#059669', // Emerald-600
    accentHover: '#047857', // Emerald-700
    accentLight: '#d1fae5', // Emerald-100
    
    // Neutral Colors
    white: '#ffffff',
    black: '#000000',
    gray50: '#f9fafb',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray300: '#d1d5db',
    gray400: '#9ca3af',
    gray500: '#6b7280',
    gray600: '#4b5563',
    gray700: '#374151',
    gray800: '#1f2937',
    gray900: '#111827',
    
    // Background Colors
    background: '#ffffff',
    backgroundSecondary: '#f9fafb',
    backgroundTertiary: '#f3f4f6',
    
    // Text Colors
    textPrimary: '#111827',
    textSecondary: '#4b5563',
    textTertiary: '#6b7280',
    textInverse: '#ffffff',
    
    // Border Colors
    border: '#e5e7eb',
    borderHover: '#d1d5db',
    borderFocus: '#2563eb',
    
    // Status Colors
    success: '#059669',
    successLight: '#d1fae5',
    warning: '#d97706',
    warningLight: '#fef3c7',
    error: '#dc2626',
    errorLight: '#fee2e2',
    info: '#2563eb',
    infoLight: '#dbeafe',
    
    // Shadow Colors
    shadow: 'rgba(0, 0, 0, 0.1)',
    shadowHover: 'rgba(0, 0, 0, 0.15)',
    shadowFocus: 'rgba(37, 99, 235, 0.3)',
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    secondary: 'linear-gradient(135deg, #7c3aed 0%, #059669 100%)',
    hero: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #059669 100%)',
    card: 'linear-gradient(145deg, #ffffff 0%, #f9fafb 100%)',
  },
  
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1rem',    // 16px
    lg: '1.5rem',  // 24px
    xl: '2rem',    // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
    '4xl': '6rem', // 96px
    '5xl': '8rem', // 128px
  },
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',  // 4px
    md: '0.5rem',   // 8px
    lg: '0.75rem',  // 12px
    xl: '1rem',     // 16px
    '2xl': '1.5rem', // 24px
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      base: '1rem',    // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',   // 48px
      '6xl': '3.75rem', // 60px
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeight: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    
    // Primary Colors (adjusted for dark mode)
    primary: '#3b82f6', // Blue-500 (lighter for dark mode)
    primaryHover: '#2563eb', // Blue-600
    primaryLight: '#1e3a8a', // Blue-900
    primaryDark: '#1e40af', // Blue-800
    
    // Secondary Colors
    secondary: '#8b5cf6', // Violet-500
    secondaryHover: '#7c3aed', // Violet-600
    secondaryLight: '#4c1d95', // Violet-900
    
    // Accent Colors
    accent: '#10b981', // Emerald-500
    accentHover: '#059669', // Emerald-600
    accentLight: '#064e3b', // Emerald-900
    
    // Background Colors (dark mode)
    background: '#0f172a', // Slate-900
    backgroundSecondary: '#1e293b', // Slate-800
    backgroundTertiary: '#334155', // Slate-700
    
    // Text Colors (dark mode)
    textPrimary: '#f8fafc', // Slate-50
    textSecondary: '#cbd5e1', // Slate-300
    textTertiary: '#94a3b8', // Slate-400
    textInverse: '#0f172a', // Slate-900
    
    // Border Colors (dark mode)
    border: '#334155', // Slate-700
    borderHover: '#475569', // Slate-600
    borderFocus: '#3b82f6', // Blue-500
    
    // Status Colors (adjusted for dark mode)
    success: '#10b981',
    successLight: '#064e3b',
    warning: '#f59e0b',
    warningLight: '#78350f',
    error: '#ef4444',
    errorLight: '#7f1d1d',
    info: '#3b82f6',
    infoLight: '#1e3a8a',
    
    // Shadow Colors (dark mode)
    shadow: 'rgba(0, 0, 0, 0.3)',
    shadowHover: 'rgba(0, 0, 0, 0.4)',
    shadowFocus: 'rgba(59, 130, 246, 0.4)',
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    secondary: 'linear-gradient(135deg, #8b5cf6 0%, #10b981 100%)',
    hero: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #10b981 100%)',
    card: 'linear-gradient(145deg, #1e293b 0%, #334155 100%)',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  },
};

// Theme provider context
export const themeConfig = {
  light: lightTheme,
  dark: darkTheme,
};
