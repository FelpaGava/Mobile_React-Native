import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#eee',
        padding: 8,
        alignItems: 'center',
        borderRadius: 20,
    },
    titulo: {
        margin: 6,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#aaa',
    },
    ladoalado: {
        flexDirection: 'row',
        marginVertical: 30,
    },
    imc: {
        color: 'lightgray',
        fontSize: 65,
        marginVertical: 15,
        textAlign: 'center',
    },
});

export default styles;