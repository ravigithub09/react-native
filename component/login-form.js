import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';


function LoginForm() {

    const [outputText, setOutputText] = useState('Longin Here');
    const [name, setName] = useState('User Name :');
    const [pwd, setPwd] = useState('Password :');
    const [value, onChangeText] = useState('User Name');
    const [namePlaceholder, setNamePlaceHolder] = useState('Enter Email/User Name');
    const [passwordPlaceholder, setPasswordPlaceHolder] = useState('Enter  password');
    return (

        <View style={styles.container}>
            <View style={styles.logoSection}>
                <Image
                    style={styles.hflogoLogo}
                    source={require('./image/hf-2.png')} />
                <Text style={styles.login}>{outputText}</Text>
            </View>
            <View style={styles.loginSection}>

                <Text>{"\n"}</Text>
                <Text style={styles.labelStyle}>{name}</Text>
                <TextInput style={styles.inputStyle}
                    onChangeText={text => onChangeText(text)} placeholder={namePlaceholder}></TextInput>
                <Text style={styles.labelStyle}>{pwd}</Text>
                <TextInput secureTextEntry={true} style={styles.inputStyle}
                    onChangeText={text => onChangeText(text)} placeholder={passwordPlaceholder}></TextInput>
            </View >
            <View style={styles.buttonSection}>
                <Button style={styles.loginActionButton} title="Login" />
                <Button style={styles.actionButton} title="Reset" />
                <Button style={styles.actionButton} title="Creat an account" />

            </View>
            <View>
                <Text style={styles.or}>Or</Text>
            </View>
        </View>

    );
}

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    loginSection: {

    },
    buttonSection: {
        width: '75%',
        height: '25%',
        justifyContent: 'space-evenly',
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
    or: {
        justifyContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: 'bold',
    },

});
