import { gql } from "@apollo/client";

export const COLORS_QUERY = gql`
    query MyQuery {
        colors(first:100) {
            name
            id
        }
    }
`