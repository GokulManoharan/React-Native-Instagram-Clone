import React from 'react';
import { View, Text } from 'react-native'
import ProfilePicture from "../../../profilePicture/index";
import styles from "./styles.js"
import { Entypo } from '@expo/vector-icons';

const PostHeader = ({ profilePicture, name }) => {


    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <ProfilePicture source={profilePicture} size={30} />
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.right}>
                <Entypo name="dots-three-vertical" size={17} color="black" />
            </View>
        </View>
    )
}

export default PostHeader