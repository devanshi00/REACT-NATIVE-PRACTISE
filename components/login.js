import { useState } from 'react';

import { View, StyleSheet,Text,TouchableHighlight, ActivityIndicator,Button,Modal, TextInput } from 'react-native';
export const Login=(props)=>{
    const[name,setname]=useState('');
    const age=29
    return(<View>
      <Text>Login Screen</Text>
      <TextInput
      style={{fontSize:20,borderColor:'red',borderwidth:2}} placeholder='Enter Name' onChangeText={(text)=>setname(text)} />
      <Button title='Go to Home Page' onPress={()=>props.navigation.navigate('Home',{name,age})}  />
    </View>)
  }