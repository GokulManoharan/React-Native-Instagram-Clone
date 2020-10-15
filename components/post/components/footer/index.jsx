import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableHighlightComponent } from 'react-native'
import styles from "./styles.js";
import { AntDesign, Fontisto, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

const PostFooter = ({ likesCount: likesCountProp, caption, postedAt }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLlikesCount] = useState(0);

    const onLikePressed = _ => {
        setIsLiked(!isLiked);
        setLlikesCount(isLiked ? likesCount - 1 : likesCount + 1);
    }

    useEffect(() => {
        setLlikesCount(likesCountProp);
    }, [])

    return (
        <View style={styles.container}>

            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={onLikePressed}>
                        <AntDesign name={isLiked ? "heart" : "hearto"} size={25}
                            color={isLiked ? 'red' : "#545454"} />
                    </TouchableWithoutFeedback>
                    <Fontisto name="comment" size={23} color="#545454" />
                    <SimpleLineIcons name="paper-plane" size={25} color="#545454" />
                </View>
                <View style={styles.rightIcons}>
                    <FontAwesome name="bookmark-o" size={24} color="#545454" />
                </View>
            </View>

            <Text style={styles.likes}>{likesCount} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
}

export default PostFooter