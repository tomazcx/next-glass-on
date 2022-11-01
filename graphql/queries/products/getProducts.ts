import { gql } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
    query productsQuery {
        products(first: 1000) {
            id
            name
            format {
                name
            }
            glassColor {
                name
            }
            material {
                name
            }
            sunLens
        }
    }
`