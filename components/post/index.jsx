import React from 'react';
import { View, Text } from 'react-native'
import PostHeader from "./components/header/index"
import PostFooter from "./components/footer/index"
import PostBody from "./components/body/index"
// import styles from "./styles.js"

const Post = ({post}) => {
    return (
        <View>
           <PostHeader profilePicture={post.user.imageUri} name={post.user.name} />
           <PostBody imageUri={post.imageUri} />
           <PostFooter caption={post.caption} likesCount={post.likesCount}  postedAt={post.postedAt}/>
        </View>
    )
}

export default Post