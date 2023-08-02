import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

import shirt1 from '@/assets/camisetas/1.png'
import shirt2 from '@/assets/camisetas/2.png'


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} width={520} height={400} alt='' />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt2} width={520} height={400} alt='' />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
