import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { GET_CART } from '../../services/queries';

const Header = ({ label }) => {
    const {
        data: { carts },
        loading,
    } = useQuery(GET_CART);

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'yellow',
                width: Dimensions.get('window').width,
                padding: 20,
                marginBottom: 10,
            }}>
            <Text>{label}</Text>
            <Text>{loading ? 'loading...' : `Cart : ${carts.length}`}</Text>
        </View>
    );
};

export default Header;
