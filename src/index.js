import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';
import TodoApp from './containers/TodoApp';
import DevTools from './containers/DevTools';
import configureStore from './store/configureStore.dev';
import './index.css';

const store = configureStore();

let rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <div>
      <TodoApp />,
      <DevTools/>
    </div>
  </Provider>,
  rootElement
);
