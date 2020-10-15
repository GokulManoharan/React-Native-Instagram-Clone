import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router/index.jsx'

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>        
        <StatusBar barStyle="dark-content" />
        <Router />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 300,
    color: "white",
    backgroundColor: 'white',
  },
});
