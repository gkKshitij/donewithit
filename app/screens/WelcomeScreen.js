// import React from "react";
// import { ImageBackground } from 'react';
import React, {useState, Component} from 'react';
import { StyleSheet, View, StatusBar, ImageBackground, Image, Text,  useWindowDimensions, SafeAreaView, Alert, Button, Dimensions} from "react-native";
// import { StatusBar } from 'expo-status-bar';

import colors from "../config/colors";

const image = { uri: "https://reactjs.org/logo-og.png" };

function WelcomeScreen(props) {

    const size = useWindowDimensions();
    const width = size.width;
    const height = size.height;

    const { styles } = useStyle();

    return (

        // // ----------------------------------------------------------------
        // // react site example
        // <View style={styles.container}>
        // <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        //   <Text style={styles.text}>Inside</Text>
        // </ImageBackground>
        // </View>
        // // ----------------------------------------------------------------


        // ----------------------------------------------------------------
        // real thing practice

        <View>

        <View style={styles.container}>
           <Image 
               style={styles.background}
               source={require("../assets/k/xda live custom.png")}
               />
        </View>

        <View style={styles.loginButton}>Login</View>
        
        <Text style={styles.text}>Width: {size.width.toFixed(2)}</Text>
        <Text style={styles.text}>Height: {size.height.toFixed(2)}</Text>

        </View>

    )
}



// // ----------------------------------------------------------------
// // react example StyleSheet
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     image: {
//       flex: 1,
//       justifyContent: "center"
//     },
//     text: {
//       color: "white",
//       fontSize: 42,
//       lineHeight: 84,
//       fontWeight: "bold",
//       textAlign: "center",
//       backgroundColor: "#000000c0"
//     }
//   });
// // ----------------------------------------------------------------
const useStyle = () => {
    const dimensions = useWindowDimensions();
    console.log('Logging dimensions', dimensions)

    const styles = StyleSheet.create({

        container: {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            // justifyContent: "space-around",
            alignItems: "center",
          },
    
        background: {
            // height: dimensions.height,
            height: dimensions.height-50,
            width: dimensions.width,
            justifyContent: 'center',
            alignItems: 'center',
    
            backgroundColor: "green",
            resizeMode: "contain",
            width: "90%",
            },

        loginButton: {
            width: '100%',
            height: 50,
            backgroundColor: 'white',
            textAlign: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            },

        rectt: {
            resizeMode: "center",
            height: 500,
            width: 300,
            backgroundColor: "rgba(255,0,0,0.9)",
        },

        loginButton: {
            width: '100%',
            height: 50,
            backgroundColor: 'white',
            textAlign: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
        },

        ttext: {
            height  : '100%', 
            backgroundColor: 'white', 
            fontSize: "10px", 
            fontWeight: 'bold', 
        },

    })
  
    return { styles }
}


export default WelcomeScreen;