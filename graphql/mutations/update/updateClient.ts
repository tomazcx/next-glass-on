import gql from "graphql-tag";

export const UPDATE_CLIENT = gql`
    mutation UpdateClient($id:ID!,$birthDate: String, $cep: String, $city: String, $complement: String, $cpf:String, $district: String, $houseNum: String, $email: String, $name: String, $street: String, $building:String, $state) {
        updateClient(
            data: {birthDate: $birthDate, cep: $cep, city: $city, complement: $complement, cpf: $cpf, district: $district, houseNum: $houseNum, email: $email, name: $name, street: $street, building: $building, state: $state}
        where: {id: $id}
        ){
            id
        }

        publishClient(where: {id: $id}){
            id
        } 
    }
`