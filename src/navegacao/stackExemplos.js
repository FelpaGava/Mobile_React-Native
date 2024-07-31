import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Exemplos from '../exemplos';
import Exemplo2 from '../exemp_2';
import Exemplo3 from '../exemp_3';
import Exemplo4 from '../exemp_4';
import Exemplo5 from '../exemp_5';
import Exemplo6 from '../exemp_6';
import Exemplo7 from '../exemp_7';
import Exemplo8 from '../exemp_8'; 

const Stack = createNativeStackNavigator();

export default function NavegacaoStackEx() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Exemplos" component={Exemplos} />
            <Stack.Screen
                name="Exemplo2"
                component={Exemplo2}
                options={{ title: 'Exemplo 2' }}
            />
            <Stack.Screen name="Exemplo3" component={Exemplo3} />
            <Stack.Screen name="Exemplo4" component={Exemplo4} />
            <Stack.Screen name="Exemplo5" component={Exemplo5} />
            <Stack.Screen name="Exemplo6" component={Exemplo6} />
            <Stack.Screen name="Exemplo7" component={Exemplo7} />
            <Stack.Screen name="Exemplo8" component={Exemplo8} />
        </Stack.Navigator>
    );
}
