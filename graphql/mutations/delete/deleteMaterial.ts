import { gql } from "@apollo/client";

export const DELETE_MATERIAL = gql`
    mutation deleteMaterial($id: ID!) {
        deleteMaterial(where: {id: $id}) {
            id
        }
    }
`