import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform, TouchableOpacity, Button,Linking, TextInput, Image} from 'react-native';

import { CameraKitCameraScreen, } from 'react-native-camera-kit';

export default class App extends Component {
  constructor() {

    super();

    this.state = {

      QR_Code_Value: '',

      panel: "login"
    };

    numSlices = 0;
    numScans = 0;
    message = [];
  }

  onQR_Code_Scan_Done = (QR_Code) => {

    if (numSlices == 0){
      //sets numSlice if QR_Code is a number
      
      if(!isNaN(QR_Code)){
        numSlices = parseInt(QR_Code);
      }
    }
    else{
      // Runs once numSlices has been collected

      if (numSlices + 1 == numScans){

        //Removes the first entry in message (number of slices)
        message.shift();

        //Removes the numbers before every entry (slice number)
        for (index = 0; index < message.length; index++){ 
          message[index]=message[index].substr(1);
        }

        //Sets QR_Code_Value and switches to the message panel
        this.setState({ QR_Code_Value: message.join("") });
        this.open_Scanned_screen();
      }
      else{
        //This checks if the current qr code is the same as the one previously scanned
        //Update this so that it uses the slice number to keep the message's order
        if(message[numScans-1]!=QR_Code){
          message.push(QR_Code);
          numScans+=1;
        }
      }
    }
  }

  open_QR_Code_Scanner=()=> {

    var that = this;
    numSlices = 0;
    numScans = 0;
    message = [];
    that.setState({ QR_Code_Value: '' });
    that.setState({ panel: "scanner" });
  }

  open_Scanned_screen=()=> {
    var that = this;

    that.setState({ panel: "message" });
  }


  render() {
    if (this.state.panel == "login") {

      return (
        <View style={styles.loginContainer}>

          <Image style={styles.imglogin} source={require("../AquiScanner/image.png")}></Image>

          <TextInput placeholder="Username" textAlign={'center'} placeholderTextColor="rgba(255,255,255,0.7)" style={styles.inputFormContainer} />

          <TextInput secureTextEntry={true} placeholder="Password" textAlign={'center'} placeholderTextColor="rgba(255,255,255,0.7)" style={styles.inputFormContainer}/>

          <TouchableOpacity onPress={this.open_QR_Code_Scanner} style={styles.buttonContainer}>
            <Text style={styles.buttonText}> Let's Go </Text>
          </TouchableOpacity>

        </View>
      );
    }
    if (this.state.panel == "scanner") {
      return (
        <View style={{ flex: 1 }}>

          <CameraKitCameraScreen
            showFrame={true}
            scanBarcode={true}
            laserColor={'#3498db'}
            frameColor={'#0099c8'}
            colorForScannerFrame={'white'}
            onReadCode={event =>
              this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
            }
          />

          <View style={{flex: -1, flexDirection: 'row', alignItems:"flex-end", justifyContent: "space-around"}}>
            <TouchableOpacity onPress={this.open_QR_Code_Scanner} style={styles.navigator }>
              <Text style={styles.navigatorText}> Scanner </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.open_Scanned_screen} style={styles.navigator}>
              <Text style={styles.navigatorText}> Previous Scan </Text>
            </TouchableOpacity>
          </View>
        </View>


      );
    }
    if (this.state.panel == "message") {
      return (
        <View style={styles.MainContainer}>

          <Text style={styles.tagline}>
            {this.state.QR_Code_Value ? ' ' + this.state.QR_Code_Value : ''}
          </Text>
          <View style={{flex: -1, flexDirection: 'row', alignItems:"flex-end", justifyContent: "space-around"}}>
              <TouchableOpacity onPress={this.open_QR_Code_Scanner} style={styles.navigator }>
                <Text style={styles.navigatorText}> Scanner </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.open_Scanned_screen} style={styles.navigator}>
                <Text style={styles.navigatorText}> Scanned Message </Text>
              </TouchableOpacity>
          </View>

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({

  loginContainer: {
    backgroundColor: '#3498db',
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainContainer: {
    backgroundColor: '#3498db',
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer:{
    marginTop: 20,
    backgroundColor: '#2908b9',
    paddingVertical: 10,
    width:150,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText:{
    justifyContent: 'center',
    textAlign: "center",
    color:"#FFFFFF",
    fontSize: 15,
    fontWeight:'900',  
  },
  inputFormContainer:{
    height: 48,
    width: 300,
    backgroundColor:'rgba(255,255,255,0.3)',
    marginBottom:10,
    alignSelf: 'center',
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 5, width: -5 },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  imglogin:{
    width:350,
    height: 150,
    resizeMode:'contain',
    marginLeft: 40,
    marginTop: -140,
    marginBottom: 50,
    marginRight: 30,    
  },
  tagline:{
    marginBottom: 500,
    paddingHorizontal: 20,
    color:'#ffffff',
    fontSize: 35
  },
  navigator:{
    backgroundColor: '#2908b9',
    width:210,
    height: 60,
    borderWidth: 2,
    justifyContent: "center"
  },
  navigatorText:{
    justifyContent: 'center',
    textAlign: "center",
    color:"#FFFFFF",
    fontSize: 20,
    fontWeight:'700',  
  }
});