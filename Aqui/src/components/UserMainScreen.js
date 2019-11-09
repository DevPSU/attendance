import React, { Component } from 'react'
import {SafeAreaView,StyleSheet,TouchableOpacity,TextInput,View,Text,StatusBar,Image} from 'react-native';
import styles from '../static/styles.js';
//import NavigationManager from './NavigationManager';

class UserMainScreen extends Component {
    
    render() {
       
        return (
            <View style={styles.mainbody}>
                <Text> Welcome to profile</Text>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')} style={styles.buttonContainer} >  
                    <Text style={styles.buttonText}>go to camera screen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default UserMainScreen;

