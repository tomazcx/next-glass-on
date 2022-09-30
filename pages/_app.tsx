import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AsideProvider } from '../providers/asideContext'
import { CartProvider } from '../providers/cartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <Component {...pageProps} />
  )
}

export default MyApp
