// @flow
import type { Action, Cards } from './actions';

function getInitialState(): Cards {
  return [];
}

export default function cardStore(
  state: Cards = getInitialState(),
  action: Action
): Cards {
  const { type, payload } = action;
  switch (type) {
    case 'CARD_REMOVE':
      return payload;
    case 'CARDS_LOAD_SUCCESS':
      return payload;
    case 'CARDS_LOAD_FAIL':
      return [];
    default:
      return state;
  }
}
