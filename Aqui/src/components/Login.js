import React,{Component} from 'react';
import {SafeAreaView,StyleSheet,TouchableOpacity,TextInput,View,Text,StatusBar,Image} from 'react-native';
//import {Button } from 'native-base';
import styles from '../static/styles.js';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import UserMainScreen from './UserMainScreen.js';
//import CameraScreen from './CameraScreen';
//import Camera from 'react-native-camera';
import {RNCamera} from 'react-native-camera';

class LoginScreen extends Component{
    render() {
        return (
            <View style={styles.mainbody}>
                <View style={styles.imgContainer}>
                    <Image style={styles.imglogin} source={require("../static/images/image.png")}></Image>
                    
                </View>
                <Text style={styles.tagline}> Attendance made easy!</Text>
                <Text style={styles.loginText}> Log In</Text>
                    
                    <TextInput placeholder="Username" textAlign={'center'} placeholderTextColor="rgba(255,255,255,0.7)" style={styles.inputFormContainer} />
                    
                    <TextInput secureTextEntry={true} placeholder="Password" textAlign={'center'} placeholderTextColor="rgba(255,255,255,0.7)" style={styles.inputFormContainer}/>
                
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')} style={styles.buttonContainer} >  
                        <Text style={styles.buttonText}>Let's Go</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}



class CameraScreen extends Component{
    render(){
        return(
            <View style={cam_styles.container}>
                <RNCamera ref={cam=>{this.camera = cam;}} style={cam_styles.preview} aspect={Camera.constants.Aspect.fill}>
                        <Text style={cam_styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                    </RNCamera>
            </View>
        );
    }

    takePicture(){
        const options ={};
        this.camera.capture({metadata: options})
        .then(data=>console.log(data))
        .catch(error=>console.log(error));
    }
}

const cam_styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
    },
    preview:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems:'center'
    },
    capture:{
        flex:0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color:'#000',
        padding:10,
        margin:40
    }
});

const MainNavigator = createStackNavigator({
    Home: UserMainScreen,
    Login : LoginScreen,
    Camera : CameraScreen,
},
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    }
);


const AppContainer = createAppContainer(MainNavigator);



class Login extends Component{

    render (){      
        return (
                <AppContainer />   
        );
    }
}

export default Login;