import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        O Mini App de Notícias é um projeto de estudo que combina navegação em
        Drawer, Tabs e Stack para apresentar notícias de tecnologia e esportes.
      </Text>
      <Button title="Voltar" onPress={() => navigation.navigate('Notícias')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' },
  texto: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});
