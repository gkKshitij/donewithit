import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text, } from "react-native";

// import React, {useState, Component, ImageBackground} from 'react';
// import { ImageBackground } from 'react';
// import { StyleSheet, Text, View, Image, SafeAreaView, Alert, Button, Dimensions } from 'react-native';



function WelcomeScreen(props) {
    return (

        <View style={styles.container}>

            <View>
            <ImageBackground 
                style={styles.background}
                source={require("../assets/favicon.png")}
                >
            <View style={styles.loginButton}></View>
            </ImageBackground>
            </View>

            <View>
            <Image
                style={styles.rectt}          
                source={require("../assets/favicon.png")}
            />
            <Text
                style={styles.ttext}>resizeMode</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create(
    {
        background: {
            // flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "green",
            resizeMode: "repeat",
            height: 300,
            width: 300,
            // position: "relative",
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
            // backgroundRepeat: 'repeat', // no-repeat
            // width: '100vw',
            // height: '100vh',
        },
        rectt: {
            resizeMode: "center",
            height: 100,
            width: 300,
            backgroundColor: "rgba(255,0,0,0.5)",
        },
        loginButton: {
            width: '100%',
            height: 70,
            backgroundColor: 'white',
        },
        ttext: {
            height  : '100%', 
            backgroundColor: 'white', 
            fontSize: "10px", 
            fontWeight: 'bold', 
        },
        container: {
            display: "flex",
            flexDirection: "vertical",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
            textAlign: "center"
        }
    }
)

export default WelcomeScreen;