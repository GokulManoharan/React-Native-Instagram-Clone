import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        height: "100%",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "space-between",
        width: "100%",
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    userName: {
        color: "#fff",
        fontWeight: "600",
        fontSize : 16
    },
    postedTime:{
        color: "#808080",
        marginLeft: 10,
        fontWeight: "600",
        fontSize : 16
    },
    bottomContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom:10,
        padding: 5
    },
    textInputContainer: {
        borderWidth: 1,
        borderColor: "#fff",
        flex: 1,
        borderRadius: 50,
        height: 50,
        marginHorizontal: 10,
        color: "#fff",
        paddingHorizontal: 10
    },
    textInput: {
        height:"100%",
        color: "#fff",
        fontSize: 16
    },
    cameraButton: {
        width: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    messageButton: {
        width: 50,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default styles