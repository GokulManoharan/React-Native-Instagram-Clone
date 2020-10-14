import React from 'react';
import Story from "../story/index";
import { View, FlatList } from "react-native";
import profilePicture1 from "../../assets/profile-picture/profile-picture1.jpg"
import profilePicture2 from "../../assets/profile-picture/profile-picture2.jpg";
import profilePicture3 from "../../assets/profile-picture/profile-picture3.jpg"
import profilePicture4 from "../../assets/profile-picture/profile-picture4.jpg";
import styles from "./styles.js"

const data = [
    {
        source: profilePicture1,
        name: "James"
    },
    {
        source: profilePicture2,
        name: "Lucas"
    },
    {
        source: profilePicture3,
        name: "Williams"
    },
    {
        source: profilePicture4,
        name: "Alex"
    },
    {
        source: profilePicture1,
        name: "Kim"
    },
    {
        source: profilePicture2,
        name: "Anderson"
    },
    {
        source: profilePicture3,
        name: "Tim"
    },
    {
        source: profilePicture4,
        name: "Pieterson"
    }
]
const Stories = props => (
    <View style={styles.container}>
        <FlatList
            data={data}
            keyExtractor={({ name }) => name}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Story source={item.source} name={item.name} />}

        />
    </View>
)

export default Stories