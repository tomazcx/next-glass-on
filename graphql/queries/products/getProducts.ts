import { gql } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
    query productsQuery {
        products(first: 100) {
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