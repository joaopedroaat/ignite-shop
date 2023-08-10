import type { AppProps } from 'next/app'


import { globalStyles } from '@/styles/global'
globalStyles()

import { CartContextProvider } from '@/contexts/cartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
        <Component {...pageProps} />
    </CartContextProvider>
  )
}
