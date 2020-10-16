import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomHomeNavigator from "./bottomTabNavigator";
import StoryScreen from '../screens/StoryScreen/index';
const RootStack = createStackNavigator();

const Router = _ => (
    <RootStack.Navigator>
        <RootStack.Screen 
            name="Home"
            component={BottomHomeNavigator}
            options={{
                headerShown: false
            }}
        />
        <RootStack.Screen
            name="Story"
            component={StoryScreen}
            options= {{
                headerShown: false
            }}
        />
    </RootStack.Navigator>
)

export default Router