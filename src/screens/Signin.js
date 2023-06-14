import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import CustomImage from '../components/CustomImage';

const Signin = (props) => {
    const [userProfile, setUserProfile] = useState(null);

    const handleGoogleSignin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signOut();
            let userInfo = await GoogleSignin.signIn();
            setUserProfile(userInfo);        
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
            alert("Failed")
        }
    };

    useEffect(() => {
        GoogleSignin.configure();
        console.log("Signin Screen => ");
        if(userProfile) {
            props.navigation.navigate("BottomTabss", {userProfile})
        }
    }, [userProfile]);
    return (
        <View style={styles.container} >
            <CustomImage source={require("../assets/images/MultiClick.png")} />
            <View style={styles.midContainer} >
                <Text style={styles.title} >
                    SIGN UP
                </Text>
                <CustomTextInput
                    text="EMAIL ID" />
                <CustomTextInput
                    text="PASSWORD"
                    secureTextEntry={true} />
                <TouchableOpacity>
                    <Text style={styles.forgot} >
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
                <View style={styles.btn} >
                    <CustomButton
                        text="Signin"
                        onPress={() => console.log("userProfile => " + JSON.stringify(userProfile))}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row' }} >
                <CustomImage
                    onPress={() => handleGoogleSignin()}
                    source={require("../assets/images/google.png")} />
                <CustomImage source={require("../assets/images/facebook.png")} />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1d1e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    midContainer: {
        backgroundColor: '#2d2d2d',
        height: '60%',
        width: '90%',
        borderRadius: 20,
        // transform: [{ rotateY: '45deg' }]
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#ff8000',
        padding: 10,
    },
    forgot: {
        color: 'white',
        position: 'absolute',
        right: 0,
        marginRight: 30
    },
    btn: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10,
        padding: 15,
    }
});

export default Signin;