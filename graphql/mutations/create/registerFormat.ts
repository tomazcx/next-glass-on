import gql from "graphql-tag";

export const REGISTER_FORMAT = gql`
mutation Assets($format: String!) {
    createFormat(data: {name: $format}) {
      id
    }
    publishFormat(where: {name: $format}) {
      id
    }
  }
`