import React, { Component } from 'react'
import {SafeAreaView,StyleSheet,TouchableOpacity,TextInput,View,Text,StatusBar,Image} from 'react-native';
//import {Button } from 'native-base';
import styles from '../static/styles.js';

class SignUpForm extends Component {
    
    render() {

        return (
            <View style={styles.formMainbody}>
                <Text style={styles.loginText}> Login</Text>
                <TextInput placeholder="Username" textAlign={'center'} placeholderTextColor="rgba(255,255,255,0.7)" style={styles.inputFormContainer} />
                
                <TextInput secureTextEntry={true} placeholder="Password" textAlign={'center'} placeholderTextColor="rgba(255,255,255,0.7)" style={styles.inputFormContainer}/>

                <TextInput placeholder="Password" textAlign={'center'} placeholderTextColor="rgba(255,255,255,0.7)" style={styles.inputFormContainer}/>
            
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>Let's Go</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignUpForm;