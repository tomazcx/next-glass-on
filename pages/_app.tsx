import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CartProvider } from '../providers/cartContext'
import { ApolloProvider } from '@apollo/client'
import {apollo_client} from '../clients/apolloClient'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apollo_client}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ApolloProvider>
  )
}

export default MyApp
