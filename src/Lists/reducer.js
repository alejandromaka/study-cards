// @flow
import type { Navigator } from 'react-native';
import type { Action, Lists } from './actions';

function getInitialState(): Lists {
  return [{name: 'fu'}, {name: 'richi'}];
}

export default function cardsStore(
  state: Lists = getInitialState(),
  action: Action
): Lists {
  const { type, payload } = action;
  switch (type) {
    case 'LISTS_LOADED':
      return payload;
    case 'LISTS_LOAD_FAIL':
      return state;
    default:
      return state;
  }
}
