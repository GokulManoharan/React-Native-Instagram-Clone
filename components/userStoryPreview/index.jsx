import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProfilePicure from "../profilePicture/index";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";

const Story = (props) => {

    const {
        story: {
            user: {
                id,
                source,
                name
            },
        }
    } = props

    const navigation = useNavigation();

    const onPress = _ => {
        navigation.navigate("Story", { userId: id});
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <ProfilePicure source={source} />
                <Text style={styles.name}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Story