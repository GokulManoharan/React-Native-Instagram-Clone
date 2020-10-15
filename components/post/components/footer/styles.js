import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 5
    },
    likes:{
        fontWeight: 'bold',
        margin: 3
    },
    caption: {
        margin: 3
    },
    postedAt: {
        margin: 3,
        color: "#8c8c8c"
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    leftIcons:{
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-between'
    },
    rightIcons: {
        // marginRight: 10
    }
});

export default styles