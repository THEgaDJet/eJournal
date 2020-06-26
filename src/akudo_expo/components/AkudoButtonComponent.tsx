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

import styles from '../styles/styles';

export const AkudoButtonComponent = ({ navigation, destination, text, isPurple=true } : { navigation: any, destination: string, text: string, isPurple: boolean } ) => {
    const buttonStyle = isPurple ? [styles.buttonPurple, styles.buttonLogIn] : [styles.buttonWhite, styles.buttonSignUp];
    const textStyle = isPurple ? styles.buttonTextWhite : styles.buttonTextPurple;

    return (
        <View>
            <TouchableHighlight style={buttonStyle}
                onPress={() => navigation.navigate(destination)}
                underlayColor={'#FFFFFF'}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}
                >
                    <Text style={textStyle}>{text}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};