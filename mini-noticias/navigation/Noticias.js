import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StackCategoria from './StackCategoria';

const Tab = createBottomTabNavigator();

const StackTecnologia = () => <StackCategoria categoria="tecnologia" />;
const StackEsportes = () => <StackCategoria categoria="esportes" />;

export default function Noticias() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Tecnologia"
        component={StackTecnologia}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hardware-chip-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Esportes"
        component={StackEsportes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="football-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
