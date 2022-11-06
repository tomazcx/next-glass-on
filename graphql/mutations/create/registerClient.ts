import { gql } from "@apollo/client";

export const CREATE_CLIENT = gql`
mutation createClient($email: String!, $password: String!, $name: String!, $birthDate: String!) {
  createClient(data: {email: $email, password: $password, name: $name, birthDate: $birthDate}) {
    id
  }

  publishClient(where: {email: $email}){
    id
  }
}
`