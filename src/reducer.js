// @flow
import type { Navigator } from 'react-native';
import type { Action, View } from './actions';

type ViewState = {
  currentView: View,
  navigator: Navigator
};

function getInitialState(): ViewState {
  return {
    currentView: 'lists',
    navigator: {}
  };
}

export default function routeStore(
  state: ViewState = getInitialState(),
  action: Action
): ViewState {
  const { type, payload } = action;
  switch (type) {
    case 'VIEW_CHANGE':
      return { ...state, currentView: payload };
    case 'LOAD_NAVIGATOR':
      return { ...state, navigator: payload };
    default:
      return state;
  }
}
