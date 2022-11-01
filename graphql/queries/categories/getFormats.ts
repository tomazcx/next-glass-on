import { gql } from "@apollo/client";

export const FORMATS_QUERY = gql`
    query MyQuery {
        formats(first:100) {
            name
            id
        }
    }
`