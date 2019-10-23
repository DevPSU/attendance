
import React,{Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import styles from '../static/styles'
import { AppRegistry,StyleSheet} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Launch extends Component{

  render (){
      return (
        <View style={styles.mainbody}>
        <View style={styles.imglaunchContainer}>
             <Image style={styles.imglogin} source={require("../static/images/image.png")}></Image>
         </View>
    </View>
      );
  }
}


export default Launch;
