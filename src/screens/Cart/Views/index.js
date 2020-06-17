import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../../components/Button';
import Header from '../../../components/Header';

function CartScreen({ navigation, cart }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Header label="Cart" />
            <View style={{ flex: 1 }}>
                <Text>Cart screen</Text>
                <Button label="To Details" onPress={() => navigation.navigate('DetailsScreen')} />
                {cart?.map(cartItem => {
                    return <View key={cartItem.id} style={{ margin: 10 }}>
                        <Text>Name : {cartItem.name}</Text>
                        <Text>Price : {cartItem.price}</Text>
                    </View>
                })}
            </View>
        </View>
    );
}

export default CartScreen;
