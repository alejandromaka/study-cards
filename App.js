// @flow
import React from 'react';
import { NavigatorIOS } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import Route from './src/Route';
import cardsReducer from './src/Cards/reducer';
import listsReducer from './src/Lists/reducer';
import routeReducer from './src/reducer';
import { changeToEdit, changeView } from './src/actionCreators';

const store = createStore(
  combineReducers({
    cards: cardsReducer,
    lists: listsReducer,
    route: routeReducer
  }),
  applyMiddleware(thunk)
);

function switchView() {
  store.dispatch(changeView('add'));
}

function editView() {
  store.dispatch(changeToEdit());
}

function App() {
  return (
    <Provider store={store}>
      <NavigatorIOS
        barStyle="default"
        initialRoute={{
          component: Route,
          leftButtonTitle: 'Edit',
          onLeftButtonPress: editView,
          onRightButtonPress: switchView,
          rightButtonTitle: 'Add',
          title: 'Study Cards'
        }}
        style={{ flex: 1 }}
      />
    </Provider>
  );
}

export default App;
