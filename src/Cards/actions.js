// @flow
export type Card = {
  id?: number,
  front: string,
  back: string
};

export type Cards = Array<Card>;

type CardAddAction = {
  +type: 'CARD_ADD',
  +payload: Card
};

type CardRemoveAction = {
  +type: 'CARD_REMOVE',
  +payload: Card
};

type CardsLoadedAction = {
  +type: 'CARDS_LOAD_SUCCESS',
  +payload: Cards
};

type CardsFailAction = {
  +type: 'CARDS_LOAD_FAIL',
  +payload: string,
  +error: boolean
};

export type Action =
  | CardAddAction
  | CardRemoveAction
  | CardsLoadedAction
  | CardsFailAction;
