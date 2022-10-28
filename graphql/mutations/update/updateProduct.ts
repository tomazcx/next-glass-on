import { gql } from "@apollo/client";

export const UPDATE_PRODUCT = gql`
    mutation createProduct($id: ID!,$name: String!, $price: Float!, $parcels: Int!, $sunLens: Boolean!, $description: String!, $format: String!, $color: String!, $material: String!) {
    updateProduct(
        data: {glassColor: {connect: {name: $color}}, format: {connect: {name:$format}}, material: {connect: {name: $material}}, description: $description, parcels: $parcels, name: $name, price: $price, sunLens: $sunLens}
        where: {id: $id}
    ) {
        id
    }

     publishProduct(where: {id: $id}) {
    id
    }
    }
`