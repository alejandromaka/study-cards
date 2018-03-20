// @flow
import type { Dispatch } from 'redux';
import type { Action, Card, Cards } from './actions';
import { getItem, setItem } from '../helpers/localStorage';

async function saveData(cards: Cards) {
  setItem('cards', JSON.stringify(cards));
}

export function loadData(id: string) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const cards: string = await getItem(id);
      const newCards: Cards = JSON.parse(cards);
      return dispatch(loadCards(newCards));
    } catch (error) {
      return dispatch(loadError(error));
    }
  };
}

export function addCard(card: Card): Action {
  return async (dispatch, getState) => {
    const { cards } = getState().cards;
    const newCards = cards.concat(card);
    await saveData(newCards);
    return dispatch(loadCards(newCards));
  };
}

export function removeCard(card: Card): Action {
  return {
    type: 'CARD_REMOVE',
    payload: card
  };
}

function loadCards(cards: Cards): Action {
  return {
    type: 'CARDS_LOAD_SUCCESS',
    payload: cards
  };
}

function loadError(error: string): Action {
  return {
    type: 'CARDS_LOAD_FAIL',
    payload: error,
    error: true
  };
}
