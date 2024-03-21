import { StyleSheet } from "react-native";

const InformStyles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.5,
        bottom: '20%',
    },
    titleContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
    inputDate: {
        flexDirection: 'row',
        margin: 30,
        marginBottom: -20,
    },
    formTextInput:{
        backgroundColor: '#FFFFFF',
        height:40,
        width: '100%',
        paddingLeft:15,
        margin: 10,
        borderRadius:10,
        elevation:10,
    },
    informe: {
        width: '100%',
        height: '60%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        padding: 20,
    },
    informeText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30,
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff',
        textAlign: 'center',
    },
    text: {
        margin: 6,
        textAlign: 'justify',
    },
    tableContainer: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25,
    },
    totalText: {
        fontWeight: 'bold',
    }
})

export default InformStyles;