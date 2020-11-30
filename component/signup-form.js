import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, ScrollView, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

function SignupForm() {

    const [outputText, setOutputText] = useState('Register Here');
    const [value, onChangeText] = useState('User Name');
    const [namePlaceholder, setNamePlaceHolder] = useState('Enter Email/User Name');
    const [passwordPlaceholder, setPasswordPlaceHolder] = useState('Enter  password');
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView contentContainerStyle={styles.contentContainer} >
                <View style={styles.logoSection}>
                    <Image
                        style={styles.hflogoLogo}
                        source={require('./image/hf-2.png')} />
                    <Text style={styles.login}>{outputText}</Text>
                </View>

                <View style={styles.loginSection}>
                    <Text style={styles.labelStyle}>First Name:</Text>
                    <TextInput style={styles.inputStyle}
                        onChangeText={text => onChangeText(text)} placeholder="First Name"></TextInput>
                    <Text style={styles.labelStyle}>Last Name:</Text>
                    <TextInput style={styles.inputStyle}
                        onChangeText={text => onChangeText(text)} placeholder="Last Name"></TextInput>
                    <Text style={styles.labelStyle}>Email Id:</Text>
                    <TextInput style={styles.inputStyle}
                        onChangeText={text => onChangeText(text)} placeholder="Enter Email"></TextInput>
                    <Text style={styles.labelStyle}>User Name:</Text>
                    <TextInput style={styles.inputStyle}
                        onChangeText={text => onChangeText(text)} placeholder="User name Autofill"></TextInput>
                    <Text style={styles.labelStyle}>Contact:</Text>
                    <TextInput style={styles.inputStyle}
                        onChangeText={text => onChangeText(text)} placeholder="Enter Contact number"></TextInput>
                    <Text style={styles.labelStyle}>Password:</Text>
                    <TextInput style={styles.inputStyle} secureTextEntry={true}
                        onChangeText={text => onChangeText(text)} placeholder="Enter Password"></TextInput>
                    <Text style={styles.labelStyle}>Veryfy Password:</Text>
                    <TextInput style={styles.inputStyle}
                        onChangeText={text => onChangeText(text)} placeholder="Re-enter Password"></TextInput>
                </View>
            </ScrollView >
            <View style={styles.signupButtonSection}>
                <Button title="Signup" />
            </View>

            <View style={styles.resetButtonSection}>
                <Button title="Reset" />
            </View>

        </SafeAreaView >

    );
}

export default SignupForm;

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },

    signupButtonSection: {
        width: 300,
        height: '25%',
        justifyContent: "flex-start",
        marginTop: 10,
    },
    resetButtonSection: {
        width: 300,
        marginTop: -150,
    },

    signupBtn: {
        justifyContent: "space-between",
        marginTop: "-10%"
    },

    login: {
        fontWeight: 'bold',
        fontSize: 30,
    },

    labelStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    inputStyle: {
        height: 40, width: 300, borderColor: 'gray', borderWidth: 1, textAlign: 'center'
    },
    hflogoLogo: {
        width: 150,
        height: 150,
    },

    logoSection: {
        justifyContent: 'center', alignItems: 'center',
    },
    contentContainer: {
        paddingVertical: 20
    }

});
