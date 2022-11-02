import { gql } from "@apollo/client";

export const PRODUCT_QUERY = gql`
    query MyQuery($id: ID!) {
        product(where: {id: $id}) {
            description
            name
            price
            id
            sunLens
            material {
                name
            }
            format {
                name
            }
            glassColor {
                name
            }
            image{
                id
                url
            }
            parcels
        }
    }
`