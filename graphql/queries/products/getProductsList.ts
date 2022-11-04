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
            material{
                name
            }
            glassColor{
                name
            }
            format{
                name
            }
            sunLens
        }
    }

`