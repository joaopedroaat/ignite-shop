import { Container, Header } from '@/styles/pages/app'
import { Handbag } from '@phosphor-icons/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'

import logoImg from '@/assets/logo.svg'
import Image from 'next/image'

import { globalStyles } from '@/styles/global'
globalStyles()

import { ShoppingCart } from '@/components/shoppingCart'
import { useState } from 'react'
import { CartProvider } from 'use-shopping-cart'

export default function App({ Component, pageProps }: AppProps) {
  const [isShoppingCartVisible, setIsShoppingCartVisible] = useState(false)
  const handleShoppingCartButtonClicked = () => {
    setIsShoppingCartVisible(!isShoppingCartVisible)
  }

  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PUBLIC_KEY ?? ''}
      currency="BRL"
      shouldPersist
    >
      <Container>
        <Header>
          <Link href='/' prefetch={false} >
            <Image src={logoImg} alt="" />
          </Link>
          <button onClick={handleShoppingCartButtonClicked}>
            <Handbag size={32} weight='bold' />
          </button>
        </Header>
        <Component {...pageProps} />
        <ShoppingCart isVisible={isShoppingCartVisible} handleVisibilityChange={handleShoppingCartButtonClicked} />
      </Container>
    </CartProvider>
  )
}
