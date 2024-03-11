import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#E3F2FD',
        padding: 18,
        alignItems: 'center',
        borderRadius: 20,
    },  
    paragraph: {
        margin: 24,
        fontSize: 30,
        fontWeight: 'bold' ,
        textAlign: 'center',
        color: '#1565C0',
    },
    image: {
        widith: '80%',
        resizeMode: 'center',
    },
});

export default styles;