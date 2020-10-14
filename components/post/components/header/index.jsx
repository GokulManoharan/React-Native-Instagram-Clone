import React from 'react';
import { View, Text } from 'react-native'
import ProfilePicture from "../../../profilePicture/index";
import styles from "./styles.js"

const PostHeader = ({ profilePicture, name }) => {


    return (
        <View style={styles.container}>
            <ProfilePicture source={profilePicture} size={30} />
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default PostHeader