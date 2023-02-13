import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CLIENT_ID } from '@/constants/googleAuth'
import { SessionProvider } from 'next-auth/react'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity
      }
    }
  })
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <SessionProvider session={session}>
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </SessionProvider>
    </GoogleOAuthProvider>
  )
}
