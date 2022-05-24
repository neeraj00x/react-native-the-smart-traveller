import React, { useState } from 'react';
import { Alert, Pressable, TextInput, View, StyleSheet, Text, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function SignUp({ navigation, route }) {
    const [name, setName] = useState('');
    const number = route.params.mobNumber;

    function onSignup() {
        fetch('https://ap-south-1.aws.data.mongodb-api.com/app/smarttraveller-zapex/endpoint/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "mob": number,
                "name": name
            })
        }).then((response) => response.json())
            .then((json) => alert(json))
    };

    async function alert(param) {
        if (param === null) {
            Alert.alert('Already registered!', 'Confirm to login', [{ text: "Confirm", onPress: () => navigation.navigate('Home'), cancelable: true }]);
            console.log(number, name);
        }
        else {
            Alert.alert('Successfully registered!', 'Confirm to login', [{ text: "Confirm", onPress: () => navigation.navigate('Home'), cancelable: true }]);
            console.log(number, name);
        }
    }


    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.innerContainer} onPress={Keyboard.dismiss}>
                    <AntDesign name="back" size={24} color="black" style={styles.icon} onPress={() => navigation.goBack()} />
                    <Text style={styles.heading}>Register</Text>
                    <TextInput
                        value={name}
                        onChangeText={(name) => setName(name)}
                        placeholder={'Name'}
                        style={styles.input}
                    />
                    <Pressable
                        onPress={onSignup}
                        style={styles.button} >
                        <Text style={styles.text}>SIGN UP</Text>
                    </Pressable>
                    <Text style={styles.disclamer}>
                        By signing up, you agree to The Smart Traveller's{' '}
                        <Text
                            style={styles.hyperlinkStyle}
                            onPress={() => {
                                Linking.openURL('https://en.wikipedia.org/wiki/Terms_of_service');
                            }}>
                            Terms of Service
                        </Text> and{' '}
                        <Text
                            style={styles.hyperlinkStyle}
                            onPress={() => {
                                Linking.openURL('https://www.privacypolicies.com/blog/privacy-policy-template/');
                            }}>
                            Privacy Policy
                        </Text>.
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    innerContainer: {
        flex: 1,
        width: "90%",
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    icon: {
        top: 50,
        position: 'absolute'
    },
    heading: {
        width: '100%',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 30,
        alignSelf: 'center'
    },
    input: {
        width: '99%',
        height: 55,
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 20,
        color: 'black',
        alignSelf: 'center'
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.45,
        color: 'white',
        alignSelf: 'center'
    },
    disclamer: {
        width: '100%',
        paddingTop: 30,
        alignSelf: 'center'
    },
    hyperlinkStyle: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: 'grey'
    }
});

export default SignUp;