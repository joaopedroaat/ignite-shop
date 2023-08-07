import { CartItem, CloseButton, ItemDetails, ItemImage, ShoppingCartContainer } from "@/styles/components/shoppingCart";
import { X } from "@phosphor-icons/react";
import Image from "next/image";

import shirt1 from '@/assets/camisetas/1.png';

interface ShoppingCartProps {
  isVisible: boolean;
  handleVisibilityChange: () => void;
}

export function ShoppingCart({ isVisible, handleVisibilityChange }: ShoppingCartProps) {
  const handleCloseButtonClicked = () => {
    handleVisibilityChange()
  }

  return isVisible && (
    <ShoppingCartContainer>
      <CloseButton onClick={handleCloseButtonClicked}>
        <X size={32} weight="bold" />
      </CloseButton>
      <h1>Sacola de compras</h1>
      <CartItem>
        <ItemImage>
          <Image src={shirt1} width={94} height={94} alt="" />
        </ItemImage>
        <ItemDetails>
          <p>Camiseta Beyond the Limits</p>
          <span>R$ 79,90</span>
          <button>Remover</button>
        </ItemDetails>
      </CartItem>
    </ShoppingCartContainer>
  )
}