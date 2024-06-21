import { View, Pressable, Text } from 'react-native'; 

export default function Atividades({ navigation }) {
    return(
        <View>
            <Pressable onPress={() => navigation.navigate('Atividade1')}>
                <Text>Atividade 1</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Atividade3')}>
                <Text>Atividade 3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Atividade4')}>
                <Text>Atividade 4</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Atividade5')}>
                <Text>Atividade 5</Text>
            </Pressable>
        </View>
    );
}