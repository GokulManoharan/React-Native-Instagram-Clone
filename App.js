import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

//Importing user defined react components
import HomeScreen from './src/screens/HomeScreen/index'

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 300,
    color: "white",
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
