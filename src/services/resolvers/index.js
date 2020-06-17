import {GET_CART} from '../queries'

export const mutations = {
    addToCart: (_, variables, { cache }) => {
        const data = cache.readQuery({ query: GET_CART });
        const newItem = { name: variables.name, price: variables.price, id: variables.id, __typename: variables.id }
        const newCart = data.carts.length ? [...data.carts, newItem] : [newItem];
        cache.writeData({
            data: { carts: newCart },
        });
        return null;
    },
};