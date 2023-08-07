import { Container, Header } from '@/styles/pages/app'
import { Handbag } from '@phosphor-icons/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'

import logoImg from '@/assets/logo.svg'
import Image from 'next/image'

import { globalStyles } from '@/styles/global'
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href='/' prefetch={false} >
          <Image src={logoImg} alt="" />
        </Link>
        <button>
          <Handbag size={32} weight='bold' />
        </button>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
