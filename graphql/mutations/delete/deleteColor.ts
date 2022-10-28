import { gql } from "@apollo/client";

export const DELETE_COLOR = gql`
    mutation deleteColor($id: ID!) {
        deleteGlassColor(where: {id: $id}) {
            id
        }
    }
`