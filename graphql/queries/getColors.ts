import { gql } from "@apollo/client";

export const COLORS_QUERY = gql`
    query MyQuery {
        colors {
            name
            id
        }
    }
`