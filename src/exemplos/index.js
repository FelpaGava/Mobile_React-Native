import { View, Pressable, Text } from 'react-native'; 
import styles from './styles';

export default function Exemplos({ navigation }) {
    return(
        <View style={styles.TextPessable} >
            <Pressable onPress={() => navigation.navigate('Exemplo2')}>
                <Text style={styles.TextPessable}>Exemplo 2</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Exemplo3')}>
                <Text >Exemplo 3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Exemplo4')}>
                <Text>Exemplo 4</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Exemplo5')}>
                <Text>Exemplo 5</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Exemplo6')}>
                <Text>Exemplo 6</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Exemplo7')}>
                <Text>Exemplo 7</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Exemplo8')}>
                <Text>Exemplo 8</Text>
            </Pressable>
        </View>
    );
}