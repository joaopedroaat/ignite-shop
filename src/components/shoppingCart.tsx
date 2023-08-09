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
  const { products, removeProduct } = useContext(CartContext)

  const handleCloseButtonClicked = () => {
    handleVisibilityChange()
  }

  const handleRemoveProduct = (productId: string) => {
    removeProduct(productId)
  }

  return isVisible && (
    <ShoppingCartContainer>
      <CloseButton onClick={handleCloseButtonClicked}>
        <X size={32} weight="bold" />
      </CloseButton>
      <h1>Sacola de compras</h1>
      {products.length ?
        products.map((product => (
          <CartItem key={product.id}>
            <ItemImage>
              <Image src={product.imageUrl} width={94} height={94} alt="" />
            </ItemImage>
            <ItemDetails>
              <p>{product.name}</p>
              <span>{product.priceFormatted}</span>
              <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
            </ItemDetails>
          </CartItem>
        ))) 
        :
        <p>Sua sacola está vazia</p>
      }
    </ShoppingCartContainer>
  )
}