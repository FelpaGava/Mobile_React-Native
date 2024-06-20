import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Atividades from '../atividades';
import Atividade1 from '../atividade_1';
import Atividade3 from '../atividade_3';
import Atividade4 from '../atividade_4';
import Atividade5 from '../atividade_5';

const Stack = createNativeStackNavigator();

export default function NavegacaoStackAtv() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Atividades" component={Atividades} />
            <Stack.Screen name="Atividade1" component={Atividade1} />
            <Stack.Screen name="Atividade3" component={Atividade3} />
            <Stack.Screen name="Atividade4" component={Atividade4} />
            <Stack.Screen name="Atividade5" component={Atividade5} />
        </Stack.Navigator>
    );
}
