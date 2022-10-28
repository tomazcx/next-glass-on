import { gql } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
    query productsQuery {
        products {
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