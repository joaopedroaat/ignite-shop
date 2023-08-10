import { CartContext } from "@/contexts/cartContext"
import { DefaultLayout } from "@/layouts/default"
import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { formatPrice } from "@/utils/formatPrice"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useContext } from "react"
import Stripe from "stripe"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    priceInCents: number
    priceFormatted: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addProduct } = useContext(CartContext)

  const handleAddProduct = () => {
    addProduct({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      priceInCents: product.priceInCents,
      defaultPriceId: product.defaultPriceId,
    })
  }

  return (
    <DefaultLayout>
      <Head>
        <title>{`${product.name} | Ignite Shop`}</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image  src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceFormatted}</span>
          <p>{product.description}</p>
          <button onClick={handleAddProduct}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </DefaultLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_ONXWfD8iDsHVyJ' } }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        priceInCents: price.unit_amount,
        defaultPriceId: price.id,
        priceFormatted: formatPrice(price.unit_amount!),
      }
    },
    revalidate: 60 * 60 * 1, // 1 Hour
  }
}
