import { gql } from "@apollo/client";

export const DELETE_MATERIAL = gql`
    mutation deleteMaterial($id: ID!) {
        deleteManyProducts(where: {material: {id: $id}}){
            count
        }

        deleteMaterial(where: {id: $id}) {
            id
        }
        
    }
`