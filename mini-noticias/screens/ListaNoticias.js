import React from 'react';
import { FlatList } from 'react-native';
import CardNoticia from '../components/CardNoticia';
import { NOTICIAS } from '../data/noticias';

export default function ListaNoticias({ navigation, route }) {
  const { categoria } = route.params;

  return (
    <FlatList
      contentContainerStyle={{ padding: 16 }}
      data={NOTICIAS[categoria]}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardNoticia
          noticia={item}
          onPress={() => navigation.navigate('Detalhes', { noticia: item })}
        />
      )}
    />
  );
}
