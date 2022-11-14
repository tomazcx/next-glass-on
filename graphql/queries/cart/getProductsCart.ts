import { gql } from "@apollo/client";

export const CART_QUERY = gql`
query createCartProduct($id: ID!) {
  cartProducts(where: {client: {id: $id}}) {
    quantity
    id
    product {
      name
      id
      price
      image{
        url
      }
      material{
        name
      }
      format{
        name
      }
      glassColor{
        name
      }
    }
  }
}
`