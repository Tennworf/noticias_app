import React from 'react';
import { TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import ListaNoticias from '../screens/ListaNoticias';
import DetalhesNoticia from '../screens/DetalhesNoticia';

const Stack = createNativeStackNavigator();

// Stack de cada aba: Lista -> Detalhes
export default function StackCategoria({ categoria }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lista"
        component={ListaNoticias}
        initialParams={{ categoria }}
        options={({ navigation }) => ({
          title: categoria === 'tecnologia' ? 'Tecnologia' : 'Esportes',
          // O header do Drawer fica oculto em Notícias, então o botão de menu vem daqui
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{ marginRight: 16 }}
            >
              <Ionicons name="menu" size={26} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Detalhes" component={DetalhesNoticia} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}
