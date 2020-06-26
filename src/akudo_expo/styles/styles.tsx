import {
    StyleSheet,
} from 'react-native';

const baseMargin = 5;
const doubleBaseMargin = 10;
const akudoBlue = "#2CC2FD";
const akudoPurple = "#973FFD";

export default StyleSheet.create({
    containerWhite: {
        flex: 1,
        backgroundColor: 'white'
        // flexDirection: 'column',
        // alignItems: 'center',
    },
    containerPurple: {
        flex: 1,
        backgroundImage: `linear-gradient(210deg, ${akudoPurple}, ${akudoBlue})`,
        // flexDirection: 'column',
        // alignItems: 'center',
    },
    home: {
        alignItems: 'center',
    },
    logo: {
        width: '141px',
        height: '141px',
    },
    logoText: {
        fontSize: 27,
        color: 'white'
    },
    buttonWhite: {
        alignItems: "center",
        backgroundColor: 'white',
        color: akudoPurple,
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        width: 207,
        height: 42,
        borderRadius: 130 / 4,
    },
    buttonTextPurple: {
        color: akudoPurple,
        textAlign: "center",
        alignSelf: "center",
        fontSize: 16,
        marginHorizontal: baseMargin
    },
    buttonSignUp: {
        marginBottom: 58
    },
    buttonLogIn: {
        marginBottom: 32
    },
    
    register: {
        backgroundColor: 'white',
    },
    registerLogo: {
        width: '126px',
        height: '126px',
    },
    registerLogoText: {
        fontSize: 24,
        color: 'black'
    },
    registerLabelText: {
        fontSize: 14,
        color: '#5C5C5C'
    },
    buttonPurple: {
        alignItems: "center",
        backgroundImage: `linear-gradient(260deg, ${akudoPurple}, ${akudoBlue})`,
        color: akudoPurple,
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        width: 207,
        height: 42,
        borderRadius: 130 / 4,
    },
    buttonTextWhite: {
        color: 'white',
        textAlign: "center",
        alignSelf: "center",
        fontSize: 16,
        textTransform: 'uppercase',
        marginHorizontal: baseMargin
    },

    otp: {
        backgroundImage: `linear-gradient(210deg, ${akudoPurple}, ${akudoBlue})`,
    },

    login: {
    },
    loginLogo: {
        width: '141px',
        height: '141px',
    },
    loginLogoText: {
        fontSize: 27,
        color: 'black'
    },
    loginLabelText: {
        fontSize: 14,
        color: '#5C5C5C'
    },
    loginIcon: {
        width: '15px',
        height: '15px',
    },

    headerContainerStyle: {
        flex: 0.2,
        alignItems: "center"
    },
    headerTitleStyle: {
        color: akudoBlue,
        fontSize: 30,
        fontWeight: "bold"
    },
    formContainerStyle: {
        paddingHorizontal: doubleBaseMargin,
        justifyContent: "space-around"
    },
    textInputStyle: {
        height: 60,
        marginVertical: baseMargin,
        borderRadius: 6,
        paddingHorizontal: doubleBaseMargin,
        backgroundColor: "transparent",
        borderColor: "#888",
        borderWidth: 1
    },
    signInButtonContainerStyle: {
        flex: 0.3,
        marginTop: doubleBaseMargin,
        alignItems: "flex-end",
        paddingHorizontal: baseMargin
    },
    signInButtonStyle: {
        width: 130,
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 130 / 4,
        alignItems: "center",
        backgroundColor: "white"
    },
    signInButtonTextStyle: {
        color: "black",
        textAlign: "center",
        alignSelf: "center",
        fontSize: 14,
        fontWeight: "bold",
        marginHorizontal: baseMargin
    },
    signInWithGoogleButtonContainerStyle: {
        flex: 0.2,
        paddingHorizontal: doubleBaseMargin
    },
    signInWithGoogleButtonStyle: {
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 130 / 4,
        alignItems: "center",
        backgroundColor: "white"
    },
    signInWithGoogleButtonTextStyle: {
        color: "black",
        textAlign: "center",
        alignSelf: "center",
        fontSize: 14,
        fontWeight: "bold",

        marginHorizontal: baseMargin
    },
    errorLabelContainerStyle: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center"
    },
    errorTextStyle: {
        color: "red",
        textAlign: "center"
    },
    loginButtonContainerStyle: {
        flex: 0.2,
        paddingHorizontal: baseMargin,
        justifyContent: "center",
        alignItems: "center"
    },
    loginButtonStyle: {
        alignItems: "center"
    },
    loginButtonTextStyle: {
        color: akudoBlue
    }
});