import React from "react";
import { StyleSheet, View, Image, Text, } from "react-native";

import colors from "../config/colors";

// import React, {useState, Component, ImageBackground} from 'react';
// import { ImageBackground } from 'react';
// import { StyleSheet, Text, View, Image, SafeAreaView, Alert, Button, Dimensions } from 'react-native';



function WelcomeScreen(props) {
    return (

        // // centering image and etc... 
        // <View style={styles.container}>
        
        //     <View>
        //     <ImageBackground 
        //         style={styles.background}
        //         source={require("../assets/favicon.png")}
        //         >
        //     <View style={styles.loginButton}>Login</View>
        //     </ImageBackground>
        //     </View>

        //     <View>
        //     <Image
        //         style={styles.rectt}          
        //         source={require("../assets/favicon.png")}
        //     />
        //     <Text
        //         style={styles.ttext}>resizeMode</Text>
        //     </View>
            
        // </View>



        // // ----------------------------------------------------------------
        // // flex layout
        // <View style={styles.container}>
        
        //     <View style={{
        //         backgroundColor: "rgba(255,0,0,0.5)",
        //         flex: 1,
        //         width: 300,
        //         // height: 300, // not required as its handled by flex
        //     }}/>

        //     <View style={{
        //         backgroundColor: "rgba(0,255,0,0.5)",
        //         flex: 1,
        //         width: 200,
        //     }}/>

        //     <View style={{
        //         backgroundColor: "blue", //rgba(0,0,255,0.5)
        //         flex: 1,
        //         width: 100,
        //     }}/>

        // </View>

        // ----------------------------------------------------------------
        // positioning practice
        //
        <View style={styles.container}>
        
            <View style={{
                backgroundColor: colors.pred,
                height: 200,
                width: 200,
                // height: 300, // not required as its handled by flex
            }}/>

            <View style={{
                backgroundColor: colors.pgreen,
                height: 150,
                width: 150,
                top: 20,
            }}/>

            <View style={{
                backgroundColor: colors.pblue, //rgba(0,0,255,0.5)
                height: 100,
                width: 100,
                top: 20,
                left: 20,
                position: "absolute",
            }}/>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            // display: "flex",
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            // justifyContent: "space-around",
            // alignItems: "center",
            // height: "100%",
            // textAlign: "center"
        },
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
            backgroundColor: "rgba(255,0,0,0.9)",
        },
        loginButton: {
            width: '100%',
            height: 70,
            backgroundColor: 'white',
            textAlign: 'center',
            flexDirection: 'column',
        },
        ttext: {
            height  : '100%', 
            backgroundColor: 'white', 
            fontSize: "10px", 
            fontWeight: 'bold', 
        },
    }
)

export default WelcomeScreen;