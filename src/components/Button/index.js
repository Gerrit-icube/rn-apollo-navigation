import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'

const Button = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ borderRadius: 20, borderColor: 'black', borderWidth: 1, padding: 5, alignItems: 'center' }}>
            <View>
                <Text>{label}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Button;