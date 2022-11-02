import { gql } from "@apollo/client";

export const UPDATE_PRODUCT_IMAGE = gql`
    mutation updateProduct($id: ID!, $idImg: ID!, $idImageToDelete: ID! ,$name: String!, $price: Float!, $parcels: Int!, $sunLens: Boolean!, $description: String!, $format: String!, $color: String!, $material: String!) {
        deleteAsset(where: {id: $idImageToDelete}){
            id
        }

        publishAsset(where: {id: $idImg}) {
            id
        }

        updateProduct(
            data: {glassColor: {connect: {name: $color}}, format: {connect: {name:$format}}, material: {connect: {name: $material}}, image: {connect: {id: $idImg}}, description: $description, parcels: $parcels, name: $name, price: $price, sunLens: $sunLens}
            where: {id: $id}
        ) {
            id
        }

        publishProduct(where: {id: $id}) {
            id
        }
    }
`