import { ReactNode, createContext, useState } from "react";

export interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  priceFormatted: string;
  defaultPriceId: string;
}

interface CartContextType {
  products: CartItem[]
  addProduct: (newProduct: CartItem) => void
  removeProduct: (productId: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState([] as CartItem[])

  const addProduct = (newProduct: CartItem) => {
    const existingProduct = products.find(product => product.id === newProduct.id)

    if (!existingProduct)
      setProducts((prevProducts) => [...prevProducts, newProduct])
  }

  const removeProduct = (productId: string) => {
    setProducts((prevProducts => prevProducts.filter(product => product.id !== productId)))
  }

  return (
    <CartContext.Provider 
      value={{
        products,
        addProduct,
        removeProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )

}