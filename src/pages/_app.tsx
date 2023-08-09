import { Container, Header, ShoppingCartButton } from '@/styles/pages/app'
import { Handbag } from '@phosphor-icons/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'

import logoImg from '@/assets/logo.svg'
import Image from 'next/image'

import { globalStyles } from '@/styles/global'
globalStyles()

import { ShoppingCart } from '@/components/shoppingCart'
import { ShoppingCartPopup } from '@/components/shoppingCartPopup'
import { CartContextProvider } from '@/contexts/cartContext'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [isShoppingCartVisible, setIsShoppingCartVisible] = useState(false)
  const handleShoppingCartButtonClicked = () => {
    setIsShoppingCartVisible(!isShoppingCartVisible)
  }

  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Link href='/' prefetch={false} >
            <Image src={logoImg} alt="" />
          </Link>
          <ShoppingCartButton onClick={handleShoppingCartButtonClicked}>
            <Handbag size={32} weight='bold' />
            <ShoppingCartPopup />
          </ShoppingCartButton>
        </Header>
        <Component {...pageProps} />
        <ShoppingCart isVisible={isShoppingCartVisible} handleVisibilityChange={handleShoppingCartButtonClicked} />
      </Container>
    </CartContextProvider>
  )
}
