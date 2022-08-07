import logo from './logo.svg';
import './App.scss';
import ListTodo from './todos/ListTodo';
import MyComponent from './examples/MyComponent';


import NavComponent from './navs/NavComponent';
import Home from './examples/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <NavComponent/>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ListTodo/> */}
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/todo">
            <ListTodo/>
          </Route>
          <Route path="/about">
            <MyComponent/>
          </Route>
          <Route path="/user" exact>
            <ListUser />
          </Route>
          <Route path="/user/id=:id">
            <DetailUser />
          </Route>
        </Switch>
      </header>
      <main>
        
      </main>
    </div>
    </Router>
  );
}

export default App;
