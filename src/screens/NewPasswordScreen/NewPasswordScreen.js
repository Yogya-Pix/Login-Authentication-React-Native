import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logo1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');  
  const [password, setPassword] = useState('');  

  const navigation = useNavigation();
  
  const onSubmitPressed = ()=>{
    console.warn("onSubmitPressed");
    navigation.navigate("HomeScreen");
  };  

  const onSignInPress = ()=>{
    console.warn("onSignInPress")
    navigation.navigate("SignIn");
  };

 
  const {height} = useWindowDimensions();
  return(
    <ScrollView showsVerticalScrollIndicator = {false}> 
    <View style = {styles.root}>
      <Text style = {styles.title}>Reset your password </Text>

      <CustomInput 
      placeholder="Code" 
      value = {code}
      setValue = {setCode} />

      <CustomInput 
      placeholder="Enter new password" 
      value = {password}
      setValue = {setPassword} />


      <CustomButton text = "Submit" 
      onPress={onSubmitPressed}/>

      <CustomButton text = "Back to Sign in"
      onPress={onSignInPress}
      type = "TERTIARY"
      />

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    alignItems: 'center',
  },
  title:{
    fontSize: 24, 
    fontWeight: 'bold',
    color: "#051C60", 
    margin: 10, 
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link:{
    color: "#FDB075", 
  },
})

export default NewPasswordScreen;