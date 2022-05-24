import React from 'react';
import { ImageBackground, StyleSheet, Image, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function Home({ navigation }) {

    return (
        <ImageBackground style={styles.container} source={require("../assets/home.jpg")} blurRadius={2} >
            <StatusBar backgroundColor='#5c6844' hidden={true} barStyle="light-content"></StatusBar>
            <Image style={styles.image} />
            <Text style={styles.heading}>The Smart Traveller</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.text}>REGISTER</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Log In')}>
                <Text style={styles.text}>LOG IN</Text>
            </Pressable>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    heading: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        top: 50,
        textAlign: 'center'
    },
    image: {
        height: '90%',
    },
    button: {
        width: '70%',
        marginBottom: 60,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
});

export default Home;