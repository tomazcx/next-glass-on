import { gql } from "@apollo/client";

export const FORMATS_QUERY = gql`
    query MyQuery {
        formats {
            name
            id
        }
    }
`