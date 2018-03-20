// @flow
import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './Card.styles';
import image from '../../assets/index-card.png'
import type { Card } from './actions';

type Props = {
  card: Card,
  enterCardView: () => {}
};

function CardView({ card, enterCardView }: Props) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <TouchableOpacity
        key={card.front}
        onPress={() => enterCardView(card)}
        style={styles.card}
      >
        <Text style={styles.text}>{card.front}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CardView;
