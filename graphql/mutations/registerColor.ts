import { gql } from "@apollo/client";

export const REGISTER_COLOR = gql`
    mutation REGISTER_COLOR($color: String!) {
        createGlassColor(data: {color: $color}) {
            id
        }
        publishGlassColor(where: {color: $color}) {
            id
        } 
  }
`