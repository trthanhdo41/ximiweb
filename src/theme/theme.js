// XimiWeb Theme System - Professional & Clean (Claude-inspired)
export const lightTheme = {
  colors: {
    // Primary Colors - Dark slate for text
    primary: '#1a1a1a', // Almost black - Professional dark text
    primaryHover: '#2d2d2d', // Slightly lighter
    primaryLight: '#f5f5f5', // Very light gray
    primaryDark: '#0a0a0a', // Very dark
    
    // Accent Colors - Orange/Coral like Claude
    accent: '#f97316', // Orange-500 - Claude-like accent
    accentHover: '#ea580c', // Orange-600
    accentLight: '#fed7aa', // Orange-200
    
    // Secondary Colors - Neutral
    secondary: '#64748b', // Slate-500
    secondaryHover: '#475569', // Slate-600
    secondaryLight: '#e2e8f0', // Slate-200
    
    // Neutral Colors
    white: '#ffffff',
    black: '#1a1a1a',
    gray50: '#fafafa',
    gray100: '#f5f5f5',
    gray200: '#eeeeee',
    gray300: '#e0e0e0',
    gray400: '#bdbdbd',
    gray500: '#9e9e9e',
    gray600: '#757575',
    gray700: '#616161',
    gray800: '#424242',
    gray900: '#1a1a1a',
    
    // Background Colors - Clean light backgrounds
    background: '#ffffff',
    backgroundSecondary: '#fafafa',
    backgroundTertiary: '#f5f5f5',
    
    // Text Colors - Dark on light
    textPrimary: '#1a1a1a',
    textSecondary: '#616161',
    textTertiary: '#9e9e9e',
    textInverse: '#ffffff',
    
    // Border Colors
    border: '#e0e0e0',
    borderHover: '#bdbdbd',
    borderFocus: '#f97316',
    
    // Status Colors
    success: '#10b981',
    successLight: '#d1fae5',
    warning: '#f59e0b',
    warningLight: '#fef3c7',
    error: '#ef4444',
    errorLight: '#fee2e2',
    info: '#3b82f6',
    infoLight: '#dbeafe',
    
    // Shadow Colors
    shadow: 'rgba(15, 23, 42, 0.08)',
    shadowHover: 'rgba(15, 23, 42, 0.12)',
    shadowFocus: 'rgba(59, 130, 246, 0.25)',
  },
  
  gradients: {
    primary: '#1a1a1a',
    secondary: '#616161',
    hero: '#ffffff',
    card: '#fafafa',
    accent: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
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
      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      base: '1rem',    // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '2rem',   // 32px
      '4xl': '2.5rem', // 40px
      '5xl': '3.5rem', // 56px
      '6xl': '4.5rem', // 72px
      '7xl': '6rem',   // 96px
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
    
    // Primary Colors (dark mode)
    primary: '#f8fafc', // Slate-50 (light text on dark)
    primaryHover: '#e2e8f0', // Slate-200
    primaryLight: '#1e293b', // Slate-800
    primaryDark: '#f1f5f9', // Slate-100
    
    // Accent Colors
    accent: '#60a5fa', // Blue-400 (lighter for dark mode)
    accentHover: '#3b82f6', // Blue-500
    accentLight: '#1e3a8a', // Blue-900
    
    // Secondary Colors
    secondary: '#94a3b8', // Slate-400
    secondaryHover: '#cbd5e1', // Slate-300
    secondaryLight: '#334155', // Slate-700
    
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
    borderFocus: '#60a5fa', // Blue-400
    
    // Status Colors (adjusted for dark mode)
    success: '#34d399',
    successLight: '#064e3b',
    warning: '#fbbf24',
    warningLight: '#78350f',
    error: '#f87171',
    errorLight: '#7f1d1d',
    info: '#60a5fa',
    infoLight: '#1e3a8a',
    
    // Shadow Colors (dark mode)
    shadow: 'rgba(0, 0, 0, 0.4)',
    shadowHover: 'rgba(0, 0, 0, 0.5)',
    shadowFocus: 'rgba(96, 165, 250, 0.3)',
  },
  
  gradients: {
    primary: '#0f172a',
    secondary: '#1e293b',
    hero: '#1e293b',
    card: '#1e293b',
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
