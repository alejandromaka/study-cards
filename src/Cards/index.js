// @flow
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import type { Card as CardType, Cards } from './actions';
import { loadData } from './actionCreators';
import { changeToEdit } from '../actionCreators';
import Card from './Card';
import EditCard from '../Add/EditCard';
import styles from './Cards.styles';

type Props = {
  +cards: Cards,
  +dispatch: Dispatch,
  +navigator: {}
};

class CardsList extends Component<Props> {
  componentDidMount() {
    this.props.dispatch(loadData('cards'));
  }

  enterCardView = (card: CardType) => {
    this.props.dispatch(
      changeToEdit({
        card: card,
        view: EditCard
      })
    );
  };

  render() {
    const { cards } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          {cards.map((card) => (
            <Card
              card={card}
              key={card.front}
              enterCardView={this.enterCardView}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default connect((state) => {
  return {
    cards: state.cards
  };
})(CardsList);
