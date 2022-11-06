import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import {apollo_client} from '../clients/apolloClient'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apollo_client}>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
