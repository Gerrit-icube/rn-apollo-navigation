import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { GET_CART } from '../../services/queries';
import Views from './Views';

function CartScreen(props) {

    const { data, loading } = useQuery(GET_CART);

    return (
        <Views {...props} cart={data.carts} loading={loading} />
    );
}

export default {
    component: CartScreen,
    name: 'CartScreen',
    navigation: ["root", "tabs"]
};