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
import { RegisterDetailsComponent } from './RegisterDetailsComponent';
import { AkudoButtonComponent } from './AkudoButtonComponent';

export const RegisterComponent = ({ navigation } : { navigation: any }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState("");
    const [isValid, setValid] = useState(true);

    const register = () => {
        if (!email) {
            setError("Email required *");
            setValid(false);
            return;
        } else if (!password && password.trim() && password.length > 6) {
            setError("Weak password, minimum 5 chars");
            setValid(false);
            return;
        } else if (!isValidEmail(email)) {
            setError("Invalid Email");
            setValid(false);
            return;
        }
    };

    return (
    <SafeAreaView style={[styles.containerWhite, styles.register]}>
        <View
            style={{
                flex: 27,
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: 47
            }}
        >
            <Image
                style={styles.registerLogo}
                source={require('../assets/AkudoLogoColour/AkudoLogoColour@3x.png')} />
            <Text style={styles.registerLogoText}>
                Akudo
            </Text>
        </View>
        <View 
            style={{
                flex: 73,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center"
            }}
        >
            <RegisterDetailsComponent heading='Full Name' placeholder='name' />
            <RegisterDetailsComponent heading='Email' placeholder='email.address@gmail.com' />
            <RegisterDetailsComponent heading='Birthdate' placeholder='DD/MM/YYYY' />
            <RegisterDetailsComponent heading='Password' placeholder='password' />
            <RegisterDetailsComponent heading='Occupation' placeholder='job' />
            
            <AkudoButtonComponent navigation={navigation} destination='OTP1' text='Sign Up' isPurple={true} />
            
            <View style={{ width: '288px', justifyContent: 'center', alignItems: 'center', marginBottom: 11 }}>
                <Text style={{ textAlignVertical: "center", textAlign: "center" }}>
                    By Creating you agree to our <br/>
                    <Text>Terms of Service</Text> <Text> and </Text> <Text>Privacy Policy</Text>
                </Text>
            </View>
        </View>
    </SafeAreaView>
    );
};