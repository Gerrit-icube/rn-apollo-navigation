import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header'
import Button from '../../../components/Button'

function HomeScreen({ products, onAddToCart }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Header label="Home" />
            <View style={{ flex: 1 }}>
                <Text>Home screen</Text>
                {products?.map(product => {
                    return <View key={product.id} style={{ margin: 10 }}>
                        <Text>Name : {product.name}</Text>
                        <Text>Price : {product.price}</Text>
                        <Button onPress={() => onAddToCart(product)} label="Add to Cart" />
                    </View>
                })}
            </View>
        </View>
    );
}

export default HomeScreen;