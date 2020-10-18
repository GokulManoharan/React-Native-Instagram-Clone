import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ImageBackground, ActivityIndicator, TouchableWithoutFeedback, Dimensions, TextInput } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import storiesData from "../../data/stories";
import styles from "./styles"
import ProfilePicture from '../../../components/profilePicture';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';

const StoryScreen = _ => {
    const route = useRoute();
    const navigation = useNavigation();

    const [userStories, setUserStories] = useState([]);
    const [activeStoryIndex, setActiveStoryIndex] = useState(0);
    const [activeStory, setActiveStory] = useState(null);
    const [activeUser, setActiveUser] = useState(null);
    const { userId } = route.params;
    useEffect(_ => {
        try {
            const userStories = storiesData.find(story => story.user.id === userId).stories;
            const activeUser = storiesData.find(story => story.user.id === userId);
            setUserStories(userStories);
            setActiveUser(activeUser);
            setActiveStoryIndex(0)
        } catch { }
    }, [])

    useEffect(_ => {
        if (activeStoryIndex < 0) {
            setActiveStoryIndex(0)
        }

        if (activeStoryIndex >= userStories.length) {
            setActiveStoryIndex(userStories.length - 1)
        }
        if (userStories && userStories.length > 0)
            setActiveStory(userStories[activeStoryIndex]);
    }, [activeStoryIndex, userStories])

    const handleOnPress = e => {
        const x = e.nativeEvent.screenX;
        const screenWidth = Dimensions.get('window').width;
        if (x < (screenWidth / 2)) {
            handlePreviousStory();
        } else {
            handleNextStory();
        }
    }

    const navigateToNextUser = _ => {
        navigation.push("Story", { userId: (Number(userId) + 1).toString() })
    }

    const navigateToPreviousUser = _ => {
        navigation.push("Story", { userId: (Number(userId) - 1).toString() })
    }

    const handleNextStory = _ => {
        if (activeStoryIndex >= userStories.length - 1) {
            navigateToNextUser();
            return
        }
        setActiveStoryIndex(activeStoryIndex + 1)
    }

    const handlePreviousStory = _ => {
        if (activeStoryIndex <= 0) {
            navigateToPreviousUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex - 1)
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
                <ImageBackground source={activeStory.source} style={styles.image}>
                    <View style={styles.userInfo}>
                        <ProfilePicture source={activeUser.user.source} size={50} />
                        <Text style={styles.userName}>{activeUser.user.name}</Text>
                        <Text style={styles.postedTime}>{activeStory.postedTime} ago</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.cameraButton}>
                            <Feather name="camera" size={30} color="#fff" />
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput editable placeholder="Send message" placeholderTextColor="#fff" style={styles.textInput} />
                        </View>
                        <View style={styles.messageButton}>
                            <SimpleLineIcons name="paper-plane" size={29} color="#fff" />
                        </View>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default StoryScreen