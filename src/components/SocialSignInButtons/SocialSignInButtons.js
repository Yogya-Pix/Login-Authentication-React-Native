import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../CustomButton';


const SocialSignInButtons = () => {
    const onSignInFacebook = ()=>{
        console.warn("facebook");
      };
    
      const onSignInGoogle = ()=>{
        console.warn("google");
      };
    
      const onSignInApple = ()=>{
        console.warn("apple");
      };
  return(
    <>
       < CustomButton text = "Sign in with Facebook" 
      onPress={onSignInFacebook}
      bgCOLOR = "#E7EAF4"
      fgCOLOR="#4765A9"
      />
      <CustomButton text = "Sign in with Google" 
      onPress={onSignInGoogle}
      bgCOLOR = "#FAE9EA"
      fgCOLOR="#DD4DD4"
      />
      <CustomButton text = "Sign in with Apple"
      onPress={onSignInApple}
      bgCOLOR = "#e3e3e3"
      fgCOLOR="#363636"
      />
    </>
  );
}

export default SocialSignInButtons;

