import React from 'react'
import { theme as defaultTheme } from '../themes'

interface ThemeContextInterface {
  theme: any
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
  theme: defaultTheme,
})

interface ThemeProviderProps {
  children: React.ReactNode
  value?: any
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  value,
}) => <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
