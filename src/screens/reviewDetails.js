/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text,Button} from 'react-native';

export default function ReviewDeails({navigation}){

    const pressHandler = () => {
        navigation.goBack();
    }
    return(
        <View style={styles.container}>
            <Text >Review Details Screen</Text>
            <Button title='back to home' onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 24
    },
  
  });