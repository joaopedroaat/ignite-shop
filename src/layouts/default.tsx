import { ShoppingCart } from "@/components/shoppingCart";
import { ShoppingCartPopup } from "@/components/shoppingCartPopup";
import { DefaultLayoutContainer, Header, ShoppingCartButton } from "@/styles/layouts/default";
import { Handbag } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";

import logoImg from '@/assets/logo.svg';

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const [isShoppingCartVisible, setIsShoppingCartVisible] = useState(false)
  
  const handleShoppingCartButtonClicked = () => {
    setIsShoppingCartVisible(!isShoppingCartVisible)
  }

  return (
    <DefaultLayoutContainer>
        <Header>
          <Link href='/' prefetch={false} >
            <Image src={logoImg} alt="" />
          </Link>
          <ShoppingCartButton onClick={handleShoppingCartButtonClicked}>
            <Handbag size={32} weight='bold' />
            <ShoppingCartPopup />
          </ShoppingCartButton>
        </Header>
        { children }
        <ShoppingCart isVisible={isShoppingCartVisible} handleVisibilityChange={handleShoppingCartButtonClicked} />
    </DefaultLayoutContainer>
  )

}

