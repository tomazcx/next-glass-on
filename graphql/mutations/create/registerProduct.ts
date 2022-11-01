import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
mutation createProduct($idImg: ID!, $name: String!, $price: Float!, $parcels: Int!, $sunLens: Boolean!, $description: String!, $format: String!, $color: String!, $material: String!) {
  publishAsset(where: {id: $idImg}) {
    id
  }
  
  createProduct(
    data: {name: $name, price: $price, parcels: $parcels, sunLens: $sunLens, description: $description, format: {connect: {name: $format}}, glassColor: {connect: {name: $color}}, material: {connect: {name: $material}}, image: {connect: {id: $idImg}}}
  ) {
    id
  }
  publishManyProducts(where: {name: $name}) {
    count
  }
}
`