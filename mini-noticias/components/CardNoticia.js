import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardNoticia({ noticia, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.resumo}>{noticia.resumo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  resumo: { fontSize: 14, color: '#555' },
});
