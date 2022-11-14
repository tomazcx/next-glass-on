import { gql } from "@apollo/client";

export const REGISTER_SELL = gql`
mutation MyQuery($value: Float!, $id: ID!, $products: String!) {
  createSell(
    data: {value: $value, client: {connect: {id: $id}}, products: $products}
  ){
    id
  }

  deleteManyCartProducts(where: {client: {id: $id}}){
    count
  }

  publishManySells(where: {client: {id: $id}}){
    count
  }
}
`