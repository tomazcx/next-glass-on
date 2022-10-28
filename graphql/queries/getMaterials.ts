import { gql } from "@apollo/client";

export const MATERIALS_QUERY = gql`
    query MyQuery {
        materials {
            name
            id
        }
    }
`