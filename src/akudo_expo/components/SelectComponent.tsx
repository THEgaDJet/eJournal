import React, { useState } from 'react';
import {
    Image,
    View,
    Button,
    Text,
    TextInput,
    TouchableHighlight,
    SafeAreaView,
    StatusBar,
} from 'react-native';

import styles from '../styles/styles';

export const SelectComponent = ({ navigation }) => {
    return (
        <SafeAreaView style={[styles.containerPurple, styles.home]}>
            <StatusBar hidden={true} />
            <View
                style={{
                    flex: 1,
                }}
            >
                <View
                style={{
                    flex: 0.4,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    backgroundColor: 'white',
                    borderRadius: 15,
                    marginBottom: 144
                }}
            >
                <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
                    <Text>
                        We will send you an OTP on this mobile number
                    </Text>
                </View>

                <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
                    <TextInput
                        placeholder='+44'
                        placeholderTextColor='#B8B8B8'
                        style={{ height: 40, borderColor: 'white', borderBottomColor: '#F1F1F1', borderWidth: 1 }}
                    />
                </View>
                <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
                    <TextInput
                        placeholder='7900000000'
                        placeholderTextColor='#B8B8B8'
                        style={{ height: 40, borderColor: 'white', borderBottomColor: '#F1F1F1', borderWidth: 1 }}
                    />
                </View>
                    
                <View>
                    <TouchableHighlight style={[styles.buttonPurple, styles.buttonLogIn]}
                        onPress={() => navigation.navigate('Dashboard')}
                        underlayColor={'#FFFFFF'}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-around"
                            }}
                        >
                            <Text style={styles.buttonTextWhite}>Self Assessment Draft</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
                <View
                    style={{
                        flex: 0.4,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        backgroundColor: 'white',
                        borderRadius: 15,
                        marginBottom: 144
                    }}
                >
                    <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
                        <Text>
                            We will send you an OTP on this mobile number
                        </Text>
                    </View>

                    <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
                        <TextInput
                            placeholder='+44'
                            placeholderTextColor='#B8B8B8'
                            style={{ height: 40, borderColor: 'white', borderBottomColor: '#F1F1F1', borderWidth: 1 }}
                        />
                    </View>
                    <View style={{ flex: 0.9, justifyContent: "flex-start" }}>
                        <TextInput
                            placeholder='7900000000'
                            placeholderTextColor='#B8B8B8'
                            style={{ height: 40, borderColor: 'white', borderBottomColor: '#F1F1F1', borderWidth: 1 }}
                        />
                    </View>
                        
                    <View>
                        <TouchableHighlight style={[styles.buttonPurple, styles.buttonLogIn]}
                            onPress={() => navigation.navigate('Filing')}
                            underlayColor={'#FFFFFF'}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-around"
                                }}
                            >
                                <Text style={styles.buttonTextWhite}>File Now</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            
            </View>
        </SafeAreaView>
    );
};