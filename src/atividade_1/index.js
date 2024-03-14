import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import Ola from './ola/index';

import logo from '../../assets/logo_react.png';

export default function Atividade1 () { 
    
    return(
        <View style={styles.container}>
             <Text style={styles.paragraph}>
            <Image source={logo} style={styles.image}/>
                Atividade1
            </Text>
            <Ola>Marcão</Ola>
            <Ola>Sandra</Ola>
            <Ola>Mayara</Ola>
            <Ola>Felipe</Ola>
        </View>
    );
};
