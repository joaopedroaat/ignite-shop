import { CartItem, CloseButton, ItemDetails, ItemImage, ShoppingCartContainer } from "@/styles/components/shoppingCart";
import { X } from "@phosphor-icons/react";
import Image from "next/image";

import { CartContext } from "@/contexts/cartContext";
import { formatPrice } from "@/utils/formatPrice";
import axios from "axios";
import { useContext, useState } from "react";

interface ShoppingCartProps {
  isVisible: boolean;
  handleVisibilityChange: () => void;
}

export function ShoppingCart({ isVisible, handleVisibilityChange }: ShoppingCartProps) {
  const { products, removeProduct } = useContext(CartContext)

  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false)

  const handleCloseButtonClicked = () => {
    handleVisibilityChange()
  }

  const handleRemoveProduct = (productId: string) => {
    removeProduct(productId)
  }

  const handleCheckout = async () => {
    setIsCreatingCheckout(true)

    try {
      const response = await axios.post('/api/checkout', {
        items: products.map(product => product.defaultPriceId)
      })
  
      const { checkoutUrl }: { checkoutUrl: string } = response.data
  
      window.location.href = checkoutUrl
    } catch (error) {
      console.log(error)
    } finally {
      setIsCreatingCheckout(false)
    }

  }

  return isVisible && (
    <ShoppingCartContainer>
      <CloseButton onClick={handleCloseButtonClicked}>
        <X size={'1.5rem'} weight="bold" />
      </CloseButton>
      <h1>Sacola de compras</h1>
      {products.map((product => (
          <CartItem key={product.id}>
            <ItemImage>
              <Image src={product.imageUrl} width={94} height={94} alt="" />
            </ItemImage>
            <ItemDetails>
              <p>{product.name}</p>
              <span>{formatPrice(product.priceInCents)}</span>
              <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
            </ItemDetails>
          </CartItem>
        )))}
      <footer>
        <small>Quantidade <span>{products.length} itens</span></small>
        <strong>Valor total <span>{formatPrice(products.reduce((sum, product) => sum + product.priceInCents, 0))}</span></strong>
        <button onClick={handleCheckout} disabled={!products.length || isCreatingCheckout}>Finalizar compra</button>
      </footer>
    </ShoppingCartContainer>
  )
}