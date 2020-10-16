import React from 'react';
import Story from "../userStoryPreview/index";
import { View, FlatList } from "react-native";
import styles from "./styles.js";
import data from "../../src/data/stories"

// const data = [
//     {
//         source: profilePicture1,
//         name: "James"
//     },
//     {
//         source: profilePicture2,
//         name: "Lucas"
//     },
//     {
//         source: profilePicture3,
//         name: "Williams"
//     },
//     {
//         source: profilePicture4,
//         name: "Alex"
//     },
//     {
//         source: profilePicture1,
//         name: "Kim"
//     },
//     {
//         source: profilePicture2,
//         name: "Anderson"
//     },
//     {
//         source: profilePicture3,
//         name: "Tim"
//     },
//     {
//         source: profilePicture4,
//         name: "Pieterson"
//     }
// ]
const Stories = props => (
    <View style={styles.container}>
        <FlatList
            data={data}
            keyExtractor={({ name }) => name}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Story story={item} />}

        />
    </View>
)

export default Stories