/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Home({ navigation }){

    
    const pressHandler = () =>{
      navigation.navigate('ReviewDetails');
      //navigation.push('ReviewDetails');
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='go to review dets' onPress={ pressHandler}/>
        </View>
    )
}

const globalStyles = StyleSheet.create({
    container: {
      padding: 24
    },
    
  });
  
  