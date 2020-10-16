import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { useRoute } from "@react-navigation/native";
import storiesData from "../../data/stories";

const StoryScreen = _ => {

    const route = useRoute();
    const { userId } = route.params;
    const userStories = storiesData.find(story => story.user.id === userId).stories;

    return (
        <SafeAreaView>
            <Text>Story goes here</Text>
        </SafeAreaView>
    )
}

export default StoryScreen