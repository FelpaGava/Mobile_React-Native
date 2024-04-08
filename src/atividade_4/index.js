import { View, Text, TextInput, Pressable } from "react-native";

import { useState } from 'react';

import styles from "./styles";

export default function atividade_4 () {

    const [txtDigitado, setTxtDigitado] = useState('Insira seu NOME e SOBRENOME');
    const [txt2, setTxt2] = useState('');
    const [txtTela, setTxtTela] = useState('');

    function ResultadoNome (txt) {
        setTxtDigitado(txt),
        setTxtTela(txtTela);
        setTxt2(txt2);
    }

    return(
        <View style={styles.container}>

        <Text style={styles.titulo}>Atividade 4</Text>

        <Text style={styles.texto}>{txtDigitado}</Text>

        <Text style={styles.texto}>Nome :</Text>

        <TextInput
        style={styles.input}
        onChangeText={(vlr) => setTxtTela(vlr)}
        value={txtTela}
        />

        <Text style={styles.texto}>Sobrenome :</Text>

        <TextInput
        style={styles.input}
        onChangeText={(vlr) => setTxt2(vlr)}
        value={txt2}
        />

        <Pressable
        style={({ pressed }) => (pressed ? [styles.botao, styles.botaoPress] : styles.botao)}
        onPress={() => ResultadoNome(`${txtTela} ${txt2}`) (setTxtTela(''), setTxt2(''))}
        >
        <Text style={styles.txtBotao}>Exibir texto</Text>
        </Pressable>
    </View>
    );
}

