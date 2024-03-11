import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';

// import Mensagem from './src/exemp_2';
import Atividade1 from './src/atividade_1';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#90CAF9',
    // alignItems: 'center',
    justifyContent: 'center',

  },
});