import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"


export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa reiciendis dignissimos animi ipsa, quidem aliquam autem dolore fugit, possimus adipisci inventore natus magnam officia a quos vitae? Dolorum, aliquam.</p>
        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}