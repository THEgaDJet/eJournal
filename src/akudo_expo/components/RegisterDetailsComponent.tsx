import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Image,
    SafeAreaView,
    TextInput,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import isValidEmail from '../utils/isValidEmail';
import styles from '../styles/styles';

export const RegisterDetailsComponent = ({ heading, placeholder } : { heading: string, placeholder: string }) => {

    return (
    <View style={{ width: '288px', flex: 1, flexDirection: 'row', justifyContent: "flex-start" }}>
        <View style={{ flex: 0.1, justifyContent: "flex-start" }}>
            <Image
                style={styles.loginIcon}
                source={require('../assets/AkudoLogoColour/AkudoLogoColour@3x.png')} 
            />
        </View>
        <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
            <Text style={styles.registerLabelText}>
                {heading}
            </Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor='#B8B8B8'
                style={{ height: 40, borderColor: 'white', borderBottomColor: '#F1F1F1', borderWidth: 1 }}
                // onChangeText={text => onChangeText(text)}
                // value={value}
            />
        </View>
    </View>
    );
};