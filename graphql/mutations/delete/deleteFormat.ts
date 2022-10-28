import { gql } from "@apollo/client";

export const DELETE_FORMAT = gql`
    mutation deleteFormat($id: ID!) {
        deleteFormat(where: {id: $id}) {
            id
        }
    }
`