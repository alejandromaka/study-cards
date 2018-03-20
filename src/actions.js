// @flow
import type { Navigator } from 'react-native';
export type AddView = 'add';
export type CardsView = 'cards';
export type ListView = 'lists';

export type View = AddView | CardsView | ListView;

export type ChangeViewAction = {
  +type: 'VIEW_CHANGE',
  +payload: View
};

export type LoadNavigatorAction = {
  +type: 'LOAD_NAVIGATOR',
  +payload: Navigator
};

export type Action = LoadNavigatorAction | ChangeViewAction;
