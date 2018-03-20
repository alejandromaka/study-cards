// @flow
export type ListItem = {
  +name: string
};
export type Lists = Array<ListItem>;

type ListsLoadedAction = {
  +type: 'LISTS_LOADED',
  +payload: Lists
};

type ListsFailAction = {
  +type: 'LISTS_LOAD_FAIL',
  +payload: string,
  +error: boolean
};

export type Action = ListsLoadedAction | ListsFailAction;
