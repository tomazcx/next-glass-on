import { gql } from "@apollo/client";

export const QUERY_CART_PAYMENT = gql`
query getCartPayment($id: ID!){    
    cartProducts(where: {client: {id: $id}}){
        id
        quantity
        product {
            name
            price
            image {
                url
            }
        }
    }
}
`