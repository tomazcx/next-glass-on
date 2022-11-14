import { gql } from "@apollo/client";

export const CLIENT_QUERY = gql`
    query Assets($id: ID!) {
        client(where: {id: $id}) {
            birthDate
            email
            name
            cep
            building
            city
            complement
            cpf
            district
            houseNum
            street
            state
        }
    }
`