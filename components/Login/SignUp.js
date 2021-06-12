import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';
import auth from '@react-native-firebase/auth';
export default function Login({ navigation }) {
    const handleSubmit = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );


    }
    return (
        <View style={styles.container}>
            <TextInput style={{ borderColor: 'black', backgroundColor: '', borderWidth: 1, borderRadius: 15, height: 40 }} placeholder='Enter email' placeholderTextColor='' keyboardType='email-address' />
            <TextInput style={{ borderColor: 'black', backgroundColor: '', borderWidth: 1, borderRadius: 15, height: 40, marginTop: 15 }} placeholder='Enter password' placeholderTextColor='' secureTextEntry={true} />
            <TouchableOpacity style={{ borderRadius: 5, borderWidth: 2, backgroundColor: 'red', height: 50, width: '40%', marginTop: 10, marginLeft: 100, padding: 15 }} onPress={handleSubmit}>
                <Text style={{ color: 'white', marginLeft: 20 }}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text>Go Login</Text>
            </TouchableOpacity>

            <Text>Sign up</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
