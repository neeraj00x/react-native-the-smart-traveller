import React, { useState } from 'react';
import { Alert, Pressable, TextInput, View, StyleSheet, Text, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function LogIn({ navigation }) {
    const [number, setNumber] = useState('');
    const [otp, setOtp] = useState('');

    function onLogin() {
        Alert.alert('Credentials', number);
    };


    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.innerContainer}>
                    <AntDesign name="back" size={24} color="black" style={styles.icon} onPress={() => navigation.goBack()} />
                    <Text style={styles.heading}>Log in</Text>
                    <TextInput
                        value={number}
                        onChangeText={(number) => setNumber(number)}
                        placeholder={'Mobile number'}
                        style={styles.input}
                    />
                    <TextInput
                        value={otp}
                        onChangeText={(otp) => setOtp(otp)}
                        placeholder={'OTP'}
                        style={styles.input}
                    />
                    <Pressable
                        onPress={onLogin}
                        style={styles.button} >
                        <Text style={styles.text}>LOG IN</Text>
                    </Pressable>
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
    },
    input: {
        width: '99%',
        height: 55,
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 20,
        color: 'black'
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
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.45,
        color: 'white',
    },
});

export default LogIn;