import React from 'react';
import { View, Text, SafeAreaView } from "react-native";
const NotificationScreen = _ => {

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "blue", height: 1500 }}>
                <Text style={{textAlign: "center", marginTop: 300, fontSize: 30, color: "white" }}>Notification</Text>
            </View>
        </SafeAreaView>
    )
}

export default NotificationScreen