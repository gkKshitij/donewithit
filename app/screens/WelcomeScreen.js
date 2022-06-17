// import React from "react";
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

        // ----------------------------------------------------------------
        // real thing practice

        <SafeAreaView>

        <View>

        <View style={styles.container}>
           <Image 
               style={styles.background}
               source={require("../assets/k/xda live custom.png")}
               />
        </View>

        <View style={styles.loginButton}>
        <Text style={styles.ttext}>Login</Text>
        </View>
        
        <Text style={styles.text}>Width: {size.width.toFixed(2)}</Text>
        <Text style={styles.text}>Height: {size.height.toFixed(2)}</Text>

        </View>

        </SafeAreaView>
    )
}


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
            resizeMode: "center",
            width: "100%",
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
            backgroundColor: colors.pblue,
            textAlign: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },

        ttext: {
            // backgroundColor: 'white', 
            fontSize: "15px", 
            fontWeight: 'bold', 
        },

    })
  
    return { styles }
}


export default WelcomeScreen;