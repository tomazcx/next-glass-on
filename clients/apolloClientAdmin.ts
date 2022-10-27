import { ApolloClient, InMemoryCache } from "@apollo/client";

export const clientAdmin = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_URI,
    cache: new InMemoryCache(),
    headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    }
})