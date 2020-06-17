import React, { useState, useEffect } from 'react';
import Views from './Views';
import { getProducts } from './services';
import { useMutation } from '@apollo/react-hooks';
import { ADD_TO_CART } from '../../services/queries'

function HomeScreen(props) {
    const [products, setProducts] = useState(null);
    const [addToCart] = useMutation(ADD_TO_CART);

    useEffect(() => {
        setProducts(getProducts());
    }, [])

    const onAddToCart = (product) => {
        addToCart({
            variables: {
                name: product.name,
                price: product.price,
                id: product.id,
            }
        })
    }

    return (
        <Views {...props} products={products} onAddToCart={onAddToCart} />
    );
}

export default {
    component: HomeScreen,
    name: 'HomeScreen',
    navigation: ["root", "tabs"]
};