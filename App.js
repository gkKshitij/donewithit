import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Alert, Button, Dimensions } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import React from 'react';
// import { Button } from 'react-native-web';

export default function App() {
  // console.log("1app executed");
  
  // // x=1;
  // // let x;
  // // x.toString();
  // console.log("2app executed");
  // console.log(Dimensions.get("screen"));
  
  return <WelcomeScreen />;
  // (
    // <View style={styles.container}>
    //   <Text>test update 5!!</Text>
    //   <Image source={require('./app/assets/favicon.png')} />
    //   <Image source={{ 
    //     width: 200,
    //     height: 300,
    //     uri:"https://picsum.photos/200/300",
    //     }} />

    //     <Button
    //       title="Click me"
    //       onPress={() =>
    //         Alert.alert("Title", "Message")
    //         // #prompt only works on ios
    //     }
    //     />
    //   <StatusBar style="auto" />
    // </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
