import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';

// import Mensagem from './src/exemp_2';
// import Atividade1 from './src/atividade_1';
// import Exemplo_3 from './src/exemp_3';
import Atividade_3 from './src/atividade_3';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade_3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',

  },
});