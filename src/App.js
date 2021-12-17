import React from 'react';

import Settings from './context/Settings.js';
import Header from './components/Header/Header.js';
import Todo from './components/todo/Todo.js';
import UpdateSetting from './components/todo/UpdateSetting.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <>
                <Header />
        <Router>
          <Switch>

            <Settings>

              <Route exact path="/setting">

                <UpdateSetting />
              </Route>
              <Route exact path="/todo-app">
                {/* <Header /> */}
                <Todo />
              </Route>

            </Settings>

          </Switch>
        </Router>

      </>

    );
  }
}
