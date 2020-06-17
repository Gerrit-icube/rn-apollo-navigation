import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import ProfileScreen from './Child/Profile'

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
            <Button label='to Profile' onPress={() => navigation.navigate('ProfileScreen')} />
        </View>
    );
}

export default {
    component: DetailsScreen,
    name: 'DetailsScreen',
    navigation: ["root"],
    // navigation: ["root", "tabs"],
    child: [ProfileScreen]
};