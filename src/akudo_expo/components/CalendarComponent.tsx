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
    StatusBar,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import styles from '../styles/styles';

export const CalendarComponent = ({ navigation }) => {
    return (
        
    <SafeAreaView style={[styles.containerPurple, { backgroundColor: '#ecf0f1' }]}>
        <Calendar
            current={'2012-03-01'}
            hideArrows={false}
            // renderArrow={(direction) => (<Arrow/>)}
            // renderHeader={(date) => {/*Return JSX*/}}
            // https://github.com/wix/react-native-calendars#customizing-look--feel
        >
    </Calendar>
        {/* <StatusBar barStyle="light-content" backgroundColor="#6a51ae" /> */}
        {/* <View
            style={{
                flex: 27,
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center"
            }}
        >
            <Image
                style={styles.registerLogo}
                source={require('../assets/AkudoLogoColour/AkudoLogoColour@3x.png')} />
            <Text style={styles.registerLogoText}>
                Akudo
            </Text>
        </View>
        <View style={{
                flex: 73,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center"
            }}>
            <View style={{ width: '288px', flex: 0.2, flexDirection: 'row', justifyContent: "flex-start" }}>
                <View style={{ flex: 0.1, justifyContent: "flex-start" }}>
                    <Image
                        style={styles.loginIcon}
                        source={require('../assets/AkudoLogoColour/AkudoLogoColour@3x.png')} 
                    />
                </View>
                <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
                    <Text style={styles.registerLabelText}>
                        Full Name
                    </Text>
                    <TextInput
                        placeholder='name'
                        placeholderTextColor='#B8B8B8'
                        style={{ height: 40, borderColor: 'white', borderBottomColor: '#F1F1F1', borderWidth: 1 }}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                    />
                </View>
            </View>

            <View style={{ width: '288px', flex: 0.2, flexDirection: 'row', justifyContent: "flex-start" }}>
                <View style={{ flex: 0.1, justifyContent: "flex-start" }}>
                    <Image
                        style={styles.loginIcon}
                        source={require('../assets/AkudoLogoColour/AkudoLogoColour@3x.png')} 
                    />
                </View>
                <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
                    <Text style={styles.registerLabelText}>
                        Email
                    </Text>
                    <TextInput
                        placeholder='email.address@gmail.com'
                        textContentType='emailAddress'
                        placeholderTextColor='#B8B8B8'
                        style={{ height: 40, borderColor: 'white', borderBottomColor: '#F1F1F1', borderWidth: 1 }}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                    />
                </View>
            </View>

            <View style={{ width: '288px', flex: 0.2, flexDirection: 'row', justifyContent: "flex-start" }}>
                <View style={{ flex: 0.1, justifyContent: "flex-start" }}>
                    <Image
                        style={styles.loginIcon}
                        source={require('../assets/AkudoLogoColour/AkudoLogoColour@3x.png')} 
                    />
                </View>
                <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
                    <Text style={styles.registerLabelText}>
                        Birthdate
                    </Text>
                    <TextInput
                        placeholder='DD/MM/YYY'
                        textContentType='none'
                        placeholderTextColor='#B8B8B8'
                        style={{ height: 40, borderColor: 'white', borderBottomColor: '#F1F1F1', borderWidth: 1 }}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                    />
                </View>
            </View>

            <View style={{ width: '288px', flex: 0.2, flexDirection: 'row', justifyContent: "flex-start" }}>
                <View style={{ flex: 0.1, justifyContent: "flex-start" }}>
                    <Image
                        style={styles.loginIcon}
                        source={require('../assets/AkudoLogoColour/AkudoLogoColour@3x.png')} 
                    />
                </View>
                <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
                    <Text style={styles.registerLabelText}>
                        Password
                    </Text>
                    <TextInput
                        placeholder='password'
                        textContentType='password'
                        placeholderTextColor='#B8B8B8'
                        style={{ height: 40, borderColor: 'white', borderBottomColor: '#F1F1F1', borderWidth: 1 }}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                    />
                </View>
            </View>

            <View style={{ width: '288px', flex: 0.2, flexDirection: 'row', justifyContent: "flex-start" }}>
                <View style={{ flex: 0.1, justifyContent: "flex-start" }}>
                    <Image
                        style={styles.loginIcon}
                        source={require('../assets/AkudoLogoColour/AkudoLogoColour@3x.png')} 
                    />
                </View>
                <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
                    <Text style={styles.registerLabelText}>
                        Occupation
                    </Text>
                    <TextInput
                        placeholder='job'
                        placeholderTextColor='#B8B8B8'
                        style={{ height: 40, borderColor: 'white', borderBottomColor: '#F1F1F1', borderWidth: 1 }}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                    />
                </View>
            </View>
        </View>

        <View>
            <TouchableHighlight style={[styles.buttonPurple, styles.buttonLogIn]}
                onPress={() => navigation.navigate('OTP1', { name: 'Jane' })}
                underlayColor={'#FFFFFF'}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}
                >
                    <Text style={styles.buttonTextWhite}>Sign Up</Text>
                </View>
            </TouchableHighlight>
        </View>

        <View style={{ width: '288px', justifyContent: 'center', alignItems: 'center', marginBottom: 11 }}>
            <Text style={{ textAlignVertical: "center", textAlign: "center" }}>
                By Creating you agree to our <br/>
                <Text>Terms of Service</Text> <Text> and </Text> <Text>Privacy Policy</Text>
            </Text>
        </View> */}

    </SafeAreaView>
    );
};