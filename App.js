import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "./screens/WelcomeScreen"
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen"
import ProfileScreen from "./screens/ProfileScreen"

const { Navigator, Screen } = createStackNavigator();

const Root = () => (
  <Navigator>
    <Screen name="Home" component={HomeScreen}  />
    <Screen name="Profile" component={ProfileScreen} />
  </Navigator>
)


const App = () => {

  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={ options => {
        console.log("options", options);
          return {
            headerLeft: null, 
            title: options.route.name, 
            headerStyle: {
              backgroundColor: "orange", 
            
            }, 
            headerTintColor: "white", 
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          
          }
        }}  >
        <Screen name="Welcome" component={WelcomeScreen} />
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Root" component={Root} options={(options) => {
        //  console.log('option' , options);
          return {
            headerLeft: () => (
              <TouchableOpacity onPress={() => options.navigation.pop()}>
                  <Text>Retour</Text>
              </TouchableOpacity>
            ), 
           // title: options.route.params.screen, 
          
          }
        }} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }

});


export default App
