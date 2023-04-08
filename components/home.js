import { useState } from 'react';

import { View, StyleSheet,Text,TouchableHighlight, ActivityIndicator,Button,Modal, TextInput } from 'react-native';
export const Home=(props)=>{
    const{name,age}=props.route.params
    return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <Text>Home Screen</Text>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>)
  }