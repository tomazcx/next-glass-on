import { gql } from "@apollo/client";

export const DELETE_FORMAT = gql`
    mutation deleteFormat($id: ID!) {
        deleteManyProducts(where: {format: {id: $id}}){
            count
        }
        deleteFormat(where: {id: $id}) {
            id
        }

       
    }
`