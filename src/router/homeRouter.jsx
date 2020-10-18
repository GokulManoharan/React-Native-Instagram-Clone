import React from 'react';
import { Image } from 'react-native';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/index';

//Asset imports
import logo from "../../assets/logo.png"

const HomeStack = createStackNavigator();

const HomeRoutes = _ => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                title: "Instagram",
                headerLeftContainerStyle: {
                    marginLeft: 15
                },
                headerRightContainerStyle: {
                    marginRight: 15
                },
                headerLeft: () => (
                    <Feather name="camera" size={24} color="black" />
                ),
                headerTitle: () => (
                    <Image source={logo} resizeMode="contain" style={{ height: 40, width: 220 }} />
                ),
                headerRight: () => (
                    <SimpleLineIcons name="paper-plane" size={25} color="#545454" />
                )
            }}
        />
        
    </HomeStack.Navigator>
)

export default HomeRoutes