import React from 'react';
import Header from './components/Header/Header.js';
import ToDo from './components/todo/todo.js';
import Settings from './context/Settings.js';

export default class App extends React.Component {
  render() {
    return (
     
      <Settings>
         <Header/>
      <ToDo />
      </Settings>
    );
  }
}
