import { gql } from "@apollo/client";

export const DELETE_COLOR = gql`
    mutation deleteColor($id: ID!) {
        deleteManyProducts(where: {glassColor: {id: $id}}){
            count
        }

        deleteGlassColor(where: {id: $id}) {
            id
        }

        
    }
`