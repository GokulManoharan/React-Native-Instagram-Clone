import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';

//Importing user defined React components
import DiscoveryScreen from '../screens/DiscoveryScreen/index';
import CreatePostScreen from '../screens/CreatePostScreen/index';
import NotificationScreen from '../screens/NotificationScreen/index';
import ProfileScreen from '../screens/ProfileScreen/index';
import HomeRoutes from './homeRouter.jsx'

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = _ => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                    return <Foundation name="home" size={24} color="black" />
                } else if (route.name === 'Discovery') {
                    return <Feather name="search" size={24} color="black" />
                } else if (route.name === 'Post') {
                    return <Feather name="plus-square" size={24} color="black" />
                } else if (route.name === 'Notification') {
                    return <AntDesign name="hearto" size={24} color="black" />
                } else if (route.name === 'Profile') {
                    return <MaterialIcons name="person-outline" size={26} color="black" />
                }
            },
        })}
        tabBarOptions={{
            activeTintColor: '#000',
            inactiveTintColor: 'gray',
            showLabel: false
        }}
    >
        <Tab.Screen name="Home" component={HomeRoutes} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
)

export default BottomHomeNavigator