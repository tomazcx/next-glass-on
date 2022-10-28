import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
mutation createProduct($name: String!, $price: Float!, $parcels: Int!, $sunLens: Boolean!, $description: String!, $format: String!, $color: String!, $material: String!) {
  createProduct(
    data: {name: $name, price: $price, parcels: $parcels, sunLens: $sunLens, description: $description, format: {connect: {name: $format}}, glassColor: {connect: {name: $color}}, material: {connect: {name: $material}}}
  ) {
    id
  }
  publishManyProducts(where: {name: $name}) {
    count
  }
}
`