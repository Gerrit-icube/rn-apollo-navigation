import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
                <Text>To Details</Text>
            </TouchableOpacity>
        </View>
    );
}

export default {
    component: SettingsScreen,
    name: 'SettingsScreen',
    navigation: ["tabs", "root"]
};