import React,{Component, useState} from 'react';
import { View, StyleSheet,Text,TouchableHighlight, ActivityIndicator,Button,Modal, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/home';
import { Login } from './components/login';
const Stack=createNativeStackNavigator();
const App = () => {
  const btnact=()=>{
    console.warn('button used')
  }


  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
       
        headerStyle:{
          backgroundColor:'blue',
        },
        headerTintColor:'Orange',
        headerTitleStyle:{
          fontSize:25
        }
      }}>
      <Stack.Screen name='Login' component={Login}
      options={{
        headerTitle:()=><Header/>,
        headerRight:()=><Button title='Right' onPress={btnact} />,
        headerStyle:{
          backgroundColor:'blue',
        },
        title:"User Login",
        headerTintColor:'pink',
        headerTitleStyle:{
          fontSize:40,
        }
      }}  />
      <Stack.Screen name='Home' component={Home} />
     
      
     </Stack.Navigator>
    
    </NavigationContainer>
   
    
    
  )
}



const Header=()=>{
  return(<TextInput placeholder='name'/>)
}
  
export default App;
  
const styles = StyleSheet.create ({
  container: {
  flex:1,justifyContent:'center',
   
  },
  buttonview:{
    flex:1,
    justifyContent:'flex-end'
  },
  centeredview:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  modalview:{
    backgroundColor:'skyblue',
    padding:40,
    borderRadius:20,
    shadowColor:'black',
    elevation:5,
  },
  modaltext:{
fontSize:30,
marginBottom:20,
  }
  
 
 
  
 

 
   
})
