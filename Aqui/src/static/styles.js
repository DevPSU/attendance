


import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create(
{
     mainbody:
     {
         flex: 1,
         backgroundColor: '#3498db',
         //backgroundColor: 'rgb(0,0,0)',
     },
     imglogin:{
        width:150,
        height: 150,
        resizeMode:'contain',
        marginLeft: 125,
        marginTop: 100,
        marginRight: 20,
    },
    imglaunchContainer:{

        alignItems:'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    imgloginContainer:{
        flexGrow: 1,
        justifyContent: 'center',
    },
    tagline:{
        textAlign:'center',
        color:'#ffffff',
        marginBottom: 40,
        fontSize: 18
        
    },
    formMainbody:
    {
             padding:20,
             
    },
         inputFormContainer:{
             height: 48,
             width: 300,
             backgroundColor:'rgba(255,255,255,0.3)',
             marginBottom:20,
             alignSelf: 'center',
             
             
         },
         loginText:{
            textAlign:'center',
            color:'#2908b9',
            marginBottom: 40,
            fontSize: 30,
            fontFamily: "Arial",
            
            
        },
        buttonContainer:{
            backgroundColor: '#2908b9',
            paddingVertical: 15,
            width:150,
            alignSelf: 'center',
        },
        buttonText:{
            textAlign: "center",
            color:"#FFFFFF",
            fontWeight:'700',
            
        },
});


export default styles;