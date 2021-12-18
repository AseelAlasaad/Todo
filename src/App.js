import React from 'react';

import Settings from './context/Settings.js';
import Header from './components/Header/Header.js';
import Todo from './components/todo/Todo.js';
import UpdateSetting from './components/todo/UpdateSetting.js';
import LoginContext from './context/LoginContext';
import Login from './components/login/Login';
import Auth from "./components/login/Auth";
import { ContextLogin } from './context/LoginContext';
import { When } from 'react-if';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <>


<LoginContext>
<Login/>
  <Auth capability="read">
      <Settings>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/Home" component={Todo} />
            <Route exact path="/settings" component={UpdateSetting} />
          </Switch>
        </Router>
      </Settings>
      </Auth>
    </LoginContext>
                {/* <LoginContext>
                  <Login/>
                  <Auth capability="read">
             <Router>
                <Header/>
                 
                   
          <Switch>
            <Settings>

              <Route exact path="/Settings">
                <UpdateSetting/>
           
               
              </Route>
              <Route exact path="/Home">
                
                <Todo/>
              </Route>

            </Settings> */}

          {/* </Switch> */}
        {/* </Router> */}
                  {/* </Auth> */}
                {/* </LoginContext> */}

      </>

    );
  }
}
