import { gql } from "@apollo/client";

export const DELETE_CART_PRODUCT = gql`
    mutation deleteCartProduct($id: ID!){
        deleteCartProduct(where: {id: $id}) {
            id
        }
    }
`