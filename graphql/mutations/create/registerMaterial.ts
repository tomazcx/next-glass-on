import gql from "graphql-tag";

export const REGISTER_MATERIAL = gql`
mutation registerMaterial($material: String!) {
    createMaterial(data: {name: $material}) {
      id
    }
    publishMaterial(where: {name: $material}) {
      id
    }
  }
`