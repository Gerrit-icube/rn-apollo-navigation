import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../../../components/Button';

function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile</Text>
            <Button label="Back to Home" onPress={() => navigation.navigate('HomeScreen')} />
        </View>
    );
}

export default {
    component: ProfileScreen,
    name: 'ProfileScreen',
    navigation: ["root"]
};