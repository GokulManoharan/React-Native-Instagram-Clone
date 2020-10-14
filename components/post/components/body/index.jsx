import React from 'react';
import { Image, Text, View } from 'react-native'
import styles from "./styles.js"

const PostBody = ({ imageUri }) => {
    return (
        <View>
            <Image source={imageUri}
                style={styles.image}>
            </Image>
        </View>
    )
}

export default PostBody