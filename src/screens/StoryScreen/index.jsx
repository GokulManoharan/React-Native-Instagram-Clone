import React, { useState, useEffect } from 'react';
import { SafeAreaView, ImageBackground, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import { useRoute } from "@react-navigation/native";
import storiesData from "../../data/stories";
import styles from "./styles"

const StoryScreen = _ => {
    const route = useRoute();

    const [userStories, setUserStories] = useState([]);
    const [activeStoryIndex, setActiveStoryIndex] = useState(0);
    const [activeStory, setActiveStory] = useState(null);

    useEffect(_ => {
        const { userId } = route.params;
        const userStories = storiesData.find(story => story.user.id === userId).stories;
        setUserStories(userStories);
        setActiveStoryIndex(0)
    }, [])

    useEffect(_ => {
        if (userStories.length > 0)
            setActiveStory(userStories[activeStoryIndex]);
    }, [activeStoryIndex, userStories])

    const handleOnPress = e => {
        console.log(e.nativeEvent.screenX)
    }

    if (!activeStory) {
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={handleOnPress}>
                <ImageBackground source={activeStory.source} style={styles.image} />
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default StoryScreen