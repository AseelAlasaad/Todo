import React from 'react';

import ToDo from './components/todo/todo.js';
import Settings from './context/Settings.js';

export default class App extends React.Component {
  render() {
    return (
      <Settings>
      <ToDo />
      </Settings>
    );
  }
}
