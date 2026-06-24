'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
  useTheme as useNextTheme,
} from 'next-themes'
import { useEffect, useState } from 'react'

// Premium theme configuration
export const themeConfig = {
  themes: [
    { name: 'dark', label: 'Dark', icon: '🌙' },
    { name: 'light', label: 'Light', icon: '☀️' },
    { name: 'system', label: 'System', icon: '🖥️' },
  ],
  defaultTheme: 'dark',
  storageKey: 'umarr-theme',
}

interface PremiumThemeProviderProps extends ThemeProviderProps {
  enableSystem?: boolean
  defaultTheme?: string
  storageKey?: string
  attribute?: string
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({ 
  children, 
  ...props 
}: PremiumThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Apply smooth transitions when theme changes
  useEffect(() => {
    if (!mounted) return

    // Add transition class to html element for smooth theme switching
    const html = document.documentElement
    html.classList.add('theme-transition')
    
    // Remove transition class after animation completes
    const timeout = setTimeout(() => {
      html.classList.remove('theme-transition')
    }, 300)

    return () => clearTimeout(timeout)
  }, [mounted])

  // Default props with premium configuration
  const defaultProps: ThemeProviderProps = {
    attribute: 'class',
    defaultTheme: themeConfig.defaultTheme,
    enableSystem: true,
    storageKey: themeConfig.storageKey,
    disableTransitionOnChange: false,
    ...props,
  }

  return (
    <NextThemesProvider {...defaultProps}>
      {/* Theme transition styles */}
      <style jsx global>{`
        .theme-transition * {
          transition: background-color 0.3s ease,
                      color 0.3s ease,
                      border-color 0.3s ease,
                      box-shadow 0.3s ease,
                      fill 0.3s ease,
                      stroke 0.3s ease,
                      background-image 0.3s ease,
                      opacity 0.3s ease !important;
        }
        
        .theme-transition *::before,
        .theme-transition *::after {
          transition: background-color 0.3s ease,
                      color 0.3s ease,
                      border-color 0.3s ease,
                      box-shadow 0.3s ease !important;
        }
        
        /* Prevent flash of incorrect theme */
        html {
          color-scheme: dark;
        }
        
        html.dark {
          color-scheme: dark;
        }
        
        html.light {
          color-scheme: light;
        }
      `}</style>

      {/* Theme detection and application */}
      <ThemeDetector />
      
      {children}
    </NextThemesProvider>
  )
}

// Theme detector component to handle system theme changes
function ThemeDetector() {
  const [systemTheme, setSystemTheme] = useState<'dark' | 'light' | null>(null)

  useEffect(() => {
    // Detect system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    setSystemTheme(mediaQuery.matches ? 'dark' : 'light')
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // This component doesn't render anything
  return null
}

// Custom hook for theme management - FIXED
export function useTheme() {
  try {
    const context = useNextTheme()
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
  } catch (error) {
    // Return default values if used outside provider
    return {
      theme: 'dark',
      setTheme: () => {},
      resolvedTheme: 'dark',
      themes: ['dark', 'light', 'system'],
      systemTheme: undefined,
      forcedTheme: undefined,
    }
  }
}

// Theme toggle component (optional - can be used anywhere)
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-9 w-16 items-center rounded-full border border-border/30 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] group"
      aria-label="Toggle theme"
    >
      {/* Slider background */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Track */}
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      </span>
      
      {/* Thumb */}
      <span
        className={`
          relative h-7 w-7 rounded-full shadow-lg transition-all duration-300 
          ${isDark 
            ? 'translate-x-[2px] bg-gradient-to-r from-cyan-500 to-purple-500' 
            : 'translate-x-[26px] bg-gradient-to-r from-amber-400 to-orange-500'
          }
          flex items-center justify-center text-xs
          group-hover:scale-110
        `}
      >
        {/* Thumb icon */}
        <span className="relative z-10">
          {isDark ? '🌙' : '☀️'}
        </span>
        
        {/* Thumb glow */}
        <span className={`
          absolute inset-0 rounded-full blur-lg transition-opacity duration-300
          ${isDark 
            ? 'bg-cyan-500/30' 
            : 'bg-amber-400/30'
          }
          opacity-0 group-hover:opacity-100
        `} />
      </span>
      
      {/* Labels */}
      <span className="absolute left-2 text-[10px] font-mono text-muted-foreground/50">
        ☀️
      </span>
      <span className="absolute right-2 text-[10px] font-mono text-muted-foreground/50">
        🌙
      </span>
    </button>
  )
}

// Theme selector component (for dropdown or radio buttons)
export function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center gap-2 p-2 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
      {themeConfig.themes.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
            ${theme === t.name 
              ? 'bg-primary/20 text-primary shadow-[0_0_20px_rgba(45,212,191,0.15)]' 
              : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
            }
          `}
        >
          <span className="flex items-center gap-2">
            <span>{t.icon}</span>
            <span>{t.label}</span>
          </span>
        </button>
      ))}
    </div>
  )
}

// Export theme configuration for use in other components
export { themeConfig as ThemeConfig }