import React from 'react';
import { View, FlatList } from "react-native";
import profilePicture1 from "../../assets/profile-picture/profile-picture1.jpg"
import profilePicture2 from "../../assets/profile-picture/profile-picture2.jpg"
import profilePicture3 from "../../assets/profile-picture/profile-picture3.jpg"
import profilePicture4 from "../../assets/profile-picture/profile-picture4.jpg"
import postPicture1 from "../../assets/profile-picture/post-picture1.jpg"
import postPicture2 from "../../assets/profile-picture/post-picture2.jpg"
import postPicture3 from "../../assets/profile-picture/post-picture3.jpg"
import postPicture4 from "../../assets/profile-picture/post-picture4.jpg"
import Post from "../post/index"
import Stories from "../userStoriesPreview/index"
// import styles from "./styles.js"

const data = [
    {   
        id: '1',
        user: {
            imageUri: profilePicture3,
            name: "Lucas Williams"
        },
        imageUri: postPicture3,
        caption: "Colors represent the mood",
        likesCount: 9812,
        postedAt: "6 minutes ago"
    
    },
    {
        id:'2',
        user: {
            imageUri: profilePicture2,
            name: "Sam Curran"
        },
        imageUri: postPicture2,
        caption: "All is well #instagram #welcomeall",
        likesCount: 1121,
        postedAt: "40 minutes ago"
    
    },
    {
        id:'3',
        user: {
            imageUri: profilePicture4,
            name: "Shane Watson"
        },
        imageUri: postPicture4,
        caption: "Is this even real??",
        likesCount: 9902,
        postedAt: "2 hours ago"
    
    },
    {
        id:'4',
        user: {
            imageUri: profilePicture1,
            name: "Kane Williamson"
        },
        imageUri: postPicture1,
        caption: "I never though I would ever do it!",
        likesCount: 65432,
        postedAt: "2 hours ago"
    
    }
]
const Feed = _ => (
    <View>
        <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Post post={item} />}
            ListHeaderComponent={Stories}
        />
    </View>
)

export default Feed