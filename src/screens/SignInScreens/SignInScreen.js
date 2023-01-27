import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logo1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  
  const navigation = useNavigation();

  const onSignInPressed = ()=>{
    console.warn("sign in");
    //validate the user

    navigation.navigate('HomeScreen');
  };

  const onForgotPasswordPressed = ()=>{
    console.warn("forgot password");
    navigation.navigate("ForgotPassword");
  };


  const onSignUpPress = ()=>{
    console.warn("onSignUpPress")
    navigation.navigate("SignUp");

  }
  const {height} = useWindowDimensions();
  return(
    <ScrollView showsVerticalScrollIndicator = {false}> 
    <View style = {styles.root}>
      <Image source = {Logo} style = {[styles.logo, {height: height * 0.3}]} resizeMode = 'contain' />

      <CustomInput placeholder="Username" value = {username} setValue = {setUsername} />
      <CustomInput placeholder = "password" value = {password} setValue = {setPassword} secureTextEntry = {true}/>

      <CustomButton text = "sign in" onPress={onSignInPressed}/>
      <CustomButton text = "forgot password?" onPress={onForgotPasswordPressed} type = "TERTIARY"/>

      <SocialSignInButtons />
      <CustomButton text = "Don't have an account? Create one"
      onPress={onSignUpPress}
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
  logo:{
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  }
})

export default SignInScreen;