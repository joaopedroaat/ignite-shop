import { CartContext } from "@/contexts/cartContext";
import { ShoppingCartPopupContainer } from "@/styles/components/shoppingCartPopup";
import { useContext } from "react";

export function ShoppingCartPopup() {
  const { products } = useContext(CartContext)


  return products.length ? (
    <ShoppingCartPopupContainer>
      {products.length}
      </ShoppingCartPopupContainer>
  ) : <></>
}