import { gql } from "@apollo/client";

export const AUTH_QUERY = gql`
    query MyQuery($email: String!) {
        client(where: {email: $email}) {
            password
            id
        }
    }
`