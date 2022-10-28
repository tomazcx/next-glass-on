import { gql } from "@apollo/client";

export const REGISTER_COLOR = gql`
    mutation REGISTER_COLOR($color: String!) {
        createGlassColor(data: {name: $color}) {
            id
        }
        publishGlassColor(where: {name: $color}) {
            id
        } 
  }
`