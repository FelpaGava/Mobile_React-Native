import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import Ola from './ola';

import logo from '../../assets/logo_react.png';

export default function Atividade1 () { 
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.image}/>;
            <Text style={styles.paragraph}>
                Atividade1
            </Text>
        </View>
    );
}
