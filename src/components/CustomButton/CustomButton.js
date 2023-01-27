import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';


const CustomButton = ({onPress, text, type = "PRIMARY", bgCOLOR, fgCOLOR}) => {
  return(
    <Pressable onPress={onPress} style = {[styles.container, styles[`container_${type}`],
      bgCOLOR ? {backgroundColor: bgCOLOR}: {},]} >

        <Text style = {[styles.text, styles[`text_${type}`], 
      fgCOLOR ? {color: fgCOLOR}: {},]}>{text}</Text>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3B71F3",
    width: "100%",
    padding: 15,
    marginVertical: 10,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  }, 

  container_SECONDARY:{
    backgroundColor: '#F9FBFC',
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY:{
    backgroundColor: '#F9FBFC',
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_TERTIARY: {
    color: 'grey',
  },
  text_SECONDARY: {
    color: '#3B71F3',
  }

})

export default CustomButton;