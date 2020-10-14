import React from 'react';
import { View, Text } from 'react-native'
import ProfilePicure from "../profilePicture/index"
import styles from "./styles.js"

const Story = props => {


    return (
        <View style={styles.container}>
            <ProfilePicure source={props.source} />
            <Text style={styles.name}>{props.name}</Text>
        </View>
    )
}

export default Story