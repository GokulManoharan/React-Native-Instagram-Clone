import React from 'react';
import { Image, View } from 'react-native';
import styles from "./styles"

const ProfilePicture = ({source, size=70}) => {

    return (
        <View style={[styles.container,{width: size + 6, height: size+6}]}>
            <Image source={source}
                style={[styles.image, {width: size, height: size}]}>
            </Image>
        </View>
    )
}

export default ProfilePicture