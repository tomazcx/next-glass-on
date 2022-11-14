import { gql } from "@apollo/client";

export const CREATE_CART_PRODUCT = gql`
    mutation createCartProduct($quantity: Int!, $idClient: ID!, $idProduct: ID!) {
        createCartProduct(
            data: {quantity: $quantity, client: {connect: {id: $idClient}}, product: {connect: {id: $idProduct}}}
        ) {
            id
        }

        publishManyCartProducts(where: {product: {id: $idProduct}}){
            count
        }
    }
`