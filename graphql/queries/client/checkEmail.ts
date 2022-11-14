import { gql } from "@apollo/client";

export const CHECK_EMAIL = gql`
query MyQuery($email: String!) {
  client(where: {email: $email}){
    email
  }
}

`