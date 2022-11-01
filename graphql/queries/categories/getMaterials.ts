import { gql } from "@apollo/client";

export const MATERIALS_QUERY = gql`
    query MyQuery {
        materials(first:100) {
            name
            id
        }
    }
`