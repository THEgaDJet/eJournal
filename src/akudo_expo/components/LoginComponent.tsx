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
import { AkudoButtonComponent } from './AkudoButtonComponent';

export const LoginComponent = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState("");
    const [isValid, setValid] = useState(true);

    const login = () => {
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

        let signInRequestData = {
            email,
            password
        };
    };

    return (
        <SafeAreaView style={[styles.containerPurple, styles.home]}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 47,
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center"
                    }}
                >
                    <Image
                        style={styles.logo}
                        source={require('../assets/AkudoLogoTransparent/AkudoLogoTransparent@3x.png')} />
                    <Text style={styles.logoText}>
                        Akudo
                    </Text>
                </View>
                <View
                    style={{
                        flex: 53,
                        flexDirection: "column",
                        justifyContent: "flex-end"
                    }}
                >
                    <AkudoButtonComponent navigation={navigation} destination='Login' text='Username' isPurple={false} />
                    <AkudoButtonComponent navigation={navigation} destination='Register' text='Password' isPurple={false} />

                    <Text style={styles.logoText}>
                        Forgot password?
                    </Text>
                    <Text style={styles.logoText}>
                        Remember me
                    </Text>

                    <AkudoButtonComponent navigation={navigation} destination='Dashboard' text='LOGIN' isPurple={true} />
                </View>
            </View>
        </SafeAreaView>
    );
};

