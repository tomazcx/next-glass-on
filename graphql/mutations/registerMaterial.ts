import gql from "graphql-tag";

export const REGISTER_MATERIAL = gql`
mutation registerMaterial($material: String!) {
    createMaterial(data: {material: $material}) {
      id
    }
    publishMaterial(where: {material: $material}) {
      id
    }
  }
`