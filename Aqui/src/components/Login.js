import React,{Component} from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Image} from 'react-native';
//import {Button } from 'native-base';
import styles from '../static/styles.js';
import LoginForm from './LoginForm.js';



class Login extends Component{

    render (){
        return (

           <View style={styles.mainbody}>
               <View style={styles.imgContainer}>
                    <Image style={styles.imglogin} source={require("../static/images/image.png")}></Image>
                    
                </View>
                <Text style={styles.tagline}> Attendance made easy!</Text>
                <Text style={styles.loginText}> Log In</Text>
                <View>
                    <LoginForm/>
                </View>
           </View>
        );
    }
}

export default Login;