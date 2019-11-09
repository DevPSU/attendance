
/*import React, { Component } from 'react'
import {SafeAreaView,StyleSheet,TouchableOpacity,TextInput,View,Text,StatusBar,Image} from 'react-native';
import Camera,{RNCamera} from 'react-native-camera';

class CameraScreen extends Component{
    render(){
        return(
            <View style={cam_styles.container}>
                <Camera 
                    ref={cam=>{
                        this.camera = cam;
                    }}
                    style={cam_styles.preview}
                    aspect = {Camera.constants.Aspect.fill}>
                        <Text style={cam_styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                    </Camera>
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

export default CameraScreen;*/