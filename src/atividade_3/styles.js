import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#fafafa',
        width: "100%",
        borderRadius: 20, 
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    botao: {
        width: '30%',
        // borderWidth: 3,
        borderRadius: 20,
        padding: 10,
        margin: 20,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtBotao: {
        fontSize: 25,
        color: '#fafafa',
    },

});

export default styles;
 