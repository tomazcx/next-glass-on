import { gql } from "@apollo/client";

export const PRODUCTS_MAIN_QUERY = gql`
    query productsMain($sunLens: Boolean!) {
        products(first: 4, where: {sunLens: $sunLens}, orderBy: publishedAt_DESC) {
            id
            name
            price
            image {
                url
            }
        }
    }


`