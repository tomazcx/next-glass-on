import { gql } from "@apollo/client";

export const CART_MODAL_QUERY = gql`
  query createCartProduct($id: ID!) {
    cartProducts(where: {client: {id: $id}}) {
      id
      quantity
      product {
        id
        name
        price
        image{
          url
        }
      }
    }
  }
`