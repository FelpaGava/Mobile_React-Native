import { useState } from "react";
import { View, Text } from "react-native";

import Input from "./input";
import Botao from "./botao";

import styles from "./styles";


export default function Exemplo_6() {

    const [peso, setPeso] = useState(null);
    const [ altura, setAltura] = useState(null)
    const [ imc, setImc] = useState(0.00)
    const mensErro = 'Valores inseridos de forma incorreta!'
    const [msgResult, setResult] = useState();

    function calculaImc () {
        
     const tmpImc = peso / (altura*altura)
     setImc(tmpImc)
     if (tmpImc < 18.5){
        setResult('Abaixo do peso')
     } else if (tmpImc > 18.5 && tmpImc < 24.90){
        setResult('Peso normal')
     } else if (tmpImc > 25 && tmpImc < 29.90){
        setResult('Sobrepeso')
     } else if (tmpImc > 30 && tmpImc < 34.90){
        setResult('Obesidade grau 1')
     } else if (tmpImc > 35 && tmpImc < 39.90){
        setResult('Obesidade grau 2')
     } else if (tmpImc > 40){
        setResult('Obesidade grau 3')
     } 
    }

    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 6</Text>
        <View style={styles.ladoalado}>
            <Input placeholder='Peso' valor={peso} atualizaValor={setPeso}/>
            <Input placeholder='Altura' valor={altura} atualizaValor={setAltura}/>
        </View>

        <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

        <Text style={styles.imc}>{msgResult}</Text>

        <Botao calcular={calculaImc}>Calcular</Botao>
    </View>

    
    );
}