import gql from 'graphql-tag';

export const GET_CART = gql`
  query GetCart {
    carts @client {
        id
        name
        price
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation AddToCart($name: String! ,$price: Number!, $id: Number!) {
    addToCart(name: $name, price: $price, id: $id) @client
  }
`;