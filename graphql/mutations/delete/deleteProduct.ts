import { gql } from "@apollo/client";

export const DELETE_PRODUCT = gql`
 mutation deleteProduct($id: ID!) {
        deleteProduct(where: {id: $id}) {
            id
        }
    }
`