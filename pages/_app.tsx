import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import { NextUIProvider, createTheme } from '@nextui-org/react';

const darkTheme = createTheme({type: "dark"});
export default function App({ Component, pageProps, session }: AppProps) {
  return (
     <NextUIProvider theme={darkTheme}>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
      </NextUIProvider>
  )
}
