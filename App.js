import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';

import NavegacaoDrawer from './src/navegacao/drawer';

export default function App() {
  return (
    <View style={styles.container}>
      <NavegacaoDrawer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: 'grey',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
});