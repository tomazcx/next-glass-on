import gql from "graphql-tag";

export const REGISTER_FORMAT = gql`
mutation Assets($format: String!) {
    createFormat(data: {format: $format}) {
      id
    }
    publishFormat(where: {format: $format}) {
      id
    }
  }
`