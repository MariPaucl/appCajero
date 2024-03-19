import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.5,
        bottom: '20%',
    },
    form:{
        width: '100%',
        height: '59%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
    formText:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5,
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 25,
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15,
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%',
        alignItems: 'center',
    },
    logoImage: {
        width: 150,
        height: 150,
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
    link: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    linkText: {
        fontStyle: 'italic',
        color: '#D32F2F',
        borderBottomWidth: 1,
        borderBottomColor: '#D32F2F',
        fontWeight: 'bold',
        marginLeft: 10,
    },
})

export default HomeStyles;