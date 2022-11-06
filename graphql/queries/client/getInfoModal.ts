import { gql } from "@apollo/client";

export const CLIENT_MODAL_QUERY = gql`
    query clientQuery($id: ID!) {
        client(where: {id: $id}) {
            birthDate
            email
            name
        }
    }

`