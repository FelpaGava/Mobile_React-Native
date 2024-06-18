import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';

// import Mensagem from './src/exemp_2';
// import Atividade1 from './src/atividade_1';
// import Exemplo_3 from './src/exemp_3';
// import Atividade_3 from './src/atividade_3'
// import Exemp_4 from './src/exemp_4';
// import Atividade_4 from './src/atividade_4';
// import Atividade_5 from './src/atividade_5';
//  import Exemplo_6 from './src/exemp_6';
// import Exemplo7 from './src/exemp_7';
import Exemplo_8 from './src/exemp_8';


export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_8 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',

  },
});