import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logo1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');  

  const navigation = useNavigation();
  
  const onConfirmPressed = ()=>{
    console.warn("onConfirmPressed");
    navigation.navigate("HomeScreen");
  };  

  const onSignInPress = ()=>{
    console.warn("onSignInPress")
    navigation.navigate("SignIn");
  };

  const onResendPress = ()=>{
    console.warn("onResendPress")
  };

const onTermsOfUsePressed =()=>{
  console.warn("onTermsOfUsePressed");
};

const onPrivacyPressed =()=>{
  console.warn("onPrivacyPressed");
};

  const {height} = useWindowDimensions();
  return(
    <ScrollView showsVerticalScrollIndicator = {false}> 
    <View style = {styles.root}>
      <Text style = {styles.title}>Confirm your email </Text>

      <CustomInput 
      placeholder="Enter your confirmation code" 
      value = {code}
      setValue = {setCode} />


      <CustomButton text = "Confirm" onPress={onConfirmPressed}/>
      
      
      <CustomButton text = "Resend code"
      onPress={onResendPress}
      type = "SECONDARY"
      />

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

export default ConfirmEmailScreen;