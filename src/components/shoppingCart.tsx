import { ShoppingCartContainer } from "@/styles/components/shoppingCart";

interface ShoppingCartProps {
  isVisible: boolean
}

export function ShoppingCart({ isVisible }: ShoppingCartProps) {
  return isVisible && (
    <ShoppingCartContainer>
      Shopping Cart
    </ShoppingCartContainer>
  )
}