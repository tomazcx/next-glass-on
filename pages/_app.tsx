import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CartProvider } from '../providers/cartContext'
import { ApolloProvider } from '@apollo/client'
import {clientAdmin} from '../clients/apolloClientAdmin'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={clientAdmin}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ApolloProvider>
  )
}

export default MyApp
