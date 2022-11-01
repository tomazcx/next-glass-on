import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
    query productsMain{
        products(first: 100) {
            id
            name
            price
            image {
                url
            }
        }
    }

`