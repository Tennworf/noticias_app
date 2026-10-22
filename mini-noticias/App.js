import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Noticias from './navigation/Noticias';
import Sobre from './screens/Sobre';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Notícias">
        <Drawer.Screen
          name="Notícias"
          component={Noticias}
          options={{
            headerShown: false,
            drawerIcon: ({ color, size }) => (
              <Ionicons name="newspaper-outline" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={Sobre}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" color={color} size={size} />
            ),
          }}
        /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
