// @flow
import type { Node } from 'react';
import type { Navigator } from 'react-native';
import type { Action, View } from './actions';
import type { Card } from './Cards/actions';

type EditAction = {
  card: Card,
  view: Node
};

export function changeView(view: View): Action {
  return { type: 'VIEW_CHANGE', payload: view };
}

export function changeToEdit({ view: Component, card }: EditAction): Action {
  return (dispatch, getState) => {
    const { navigator } = getState().route;
    navigator.push({
      component: Component,
      passProps: { card }
    });
  };
}

export function loadNavigation(navigator: Navigator): Action {
  return { type: 'LOAD_NAVIGATOR', payload: navigator };
}
