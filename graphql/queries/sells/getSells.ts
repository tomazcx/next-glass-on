import { gql } from "@apollo/client";

export const GET_SELLS = gql`
query MyQuery($id: ID!) {
  sells(where: {client: {id: $id}}) {
    products
    value
    id
    createdAt
  }
}
`