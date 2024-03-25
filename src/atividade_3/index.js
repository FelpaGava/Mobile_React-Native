import { useState } from 'react'; 

import {View, Text, TouchableOpacity } from "react-native";

import styles from './styles';

export default function Atividade_3 () {

   const [numero, setNumero] = useState(0);

    function diminuir (){
        alert('Aula de React-Native');
    }

    function adicionar(){
        setNumero(numero+1);
    }

    function diminuir(){
        setNumero(numero-1);
    }

    function zerar(){
        setNumero(0);
    }
{

}
    return(
        <View  style={styles.container}> 
            <Text style={styles.titulo}>ATIVIDADE 3</Text>
             <View>
                <View>
                 <TouchableOpacity style={styles.botao} onPress={() => adicionar()}>
                    <Text style={styles.txtBotao}>+</Text>
                 </TouchableOpacity>
            
                    <Text style={styles.titulo}>{numero}</Text>

                 <TouchableOpacity style={styles.botao} onPress={() => diminuir()}>
                    <Text style={styles.txtBotao}>-</Text>
                </TouchableOpacity>
                </View>
            
                <TouchableOpacity style={styles.botao} onPress={() => zerar()}>
                    <Text style={styles.txtBotao}>ZERAR</Text>
                </TouchableOpacity>
             </View>
        </View>
    );
}
