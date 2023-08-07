import { CartItem, CloseButton, ItemDetails, ItemImage, ShoppingCartContainer } from "@/styles/components/shoppingCart";
import { X } from "@phosphor-icons/react";
import Image from "next/image";

import { CartContext } from "@/contexts/cartContext";
import { useContext } from "react";

interface ShoppingCartProps {
  isVisible: boolean;
  handleVisibilityChange: () => void;
}

export function ShoppingCart({ isVisible, handleVisibilityChange }: ShoppingCartProps) {
  const { products } = useContext(CartContext)

  const handleCloseButtonClicked = () => {
    handleVisibilityChange()
  }

  return isVisible && (
    <ShoppingCartContainer>
      <CloseButton onClick={handleCloseButtonClicked}>
        <X size={32} weight="bold" />
      </CloseButton>
      <h1>Sacola de compras</h1>
      {products.map((product => (
        <CartItem key={product.id}>
          <ItemImage>
            <Image src={product.imageUrl} width={94} height={94} alt="" />
          </ItemImage>
          <ItemDetails>
            <p>{product.name}</p>
            <span>{product.priceFormatted}</span>
            <button>Remover</button>
          </ItemDetails>
        </CartItem>
      )))}
    </ShoppingCartContainer>
  )
}