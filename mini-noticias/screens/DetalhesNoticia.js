import React, { useLayoutEffect } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function DetalhesNoticia({ navigation, route }) {
  const { noticia } = route.params;

  // Título do cabeçalho dinâmico
  useLayoutEffect(() => {
    navigation.setOptions({ title: noticia.titulo });
  }, [navigation, noticia]);

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.texto}>{noticia.conteudo}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  texto: { fontSize: 16, lineHeight: 24 },
});
