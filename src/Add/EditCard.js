// @flow
import React from 'react';
import { Image, TextInput, View } from 'react-native';
import image from '../../assets/index-card.png';
import styles from './EditCard.styles';

type Props = {
  card: {
    +back: string,
    +front: string,
  },
  +handleBackChange: () => void,
  +handleFrontChange: () => void
};

function EditCard({ card, handleFrontChange, handleBackChange }: Props) {
  return (
    <View style={styles.cardsContainer}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <TextInput
          autofocus
          onChangeText={handleFrontChange}
          placeholder="front of card"
          style={styles.input}
          value={card.front}
        />
      </View>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <TextInput
          onChangeText={handleBackChange}
          placeholder="back of card"
          style={styles.input}
          value={card.back}
        />
      </View>
    </View>
  );
}

export default EditCard;
