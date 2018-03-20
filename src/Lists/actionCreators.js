// @flow
import { getItem } from '../helpers/localStorage';
import type { Action, Lists } from './actions';

function listsLoaded(lists: Lists): Action {
  return { type: 'LISTS_LOADED', payload: lists };
}

function loadError(error: string): Action {
  return {
    type: 'LISTS_LOAD_FAIL',
    payload: error,
    error: true
  };
}

export function loadLists(): Action {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const lists: string = await getItem('lists');
      const formattedLists: Lists = JSON.parse(lists);
      return dispatch(listsLoaded(formattedLists));
    } catch (error) {
      return dispatch(loadError(error));
    }
  };
}
