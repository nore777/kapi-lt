'use client'
import React, { createContext } from 'react'
import ThemeProvider from './ThemeProvider'
import AuthProvider from './AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const AppContext = createContext({})

interface AppProviderProps {
  children: React.ReactNode
}

const queryClient = new QueryClient()

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>
      <ThemeProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>

    </AppContext.Provider>
  )
}

export default AppProvider
