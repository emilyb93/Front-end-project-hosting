
import './App.css';
import Header from './components/Header/Header';
import Homepage from './switch/Homepage/Homepage';
import {Switch, Route} from 'react-router-dom'
import Articles from './switch/Articles/Articles';
import Topics from './switch/Topics/Topics';
import SingleArticle from './switch/SingleArticle/SingleArticle';
import {UserContext} from './utils/Context'
import {useLogIn} from './Hooks/LogIn'
import Account from './switch/Account/Account';
import { useEffect } from 'react';

function App() {

  const {user, loggedIn, avatar, trueName, setUser} = useLogIn()
 
  

 
 

  return (
    <div className="App">
      <UserContext.Provider value={{user, loggedIn, setUser, avatar, trueName}}>
      <Header />

      <Switch>
      <Route exact path="/">
      <Homepage />
      </Route>
      <Route exact path="/articles">
        <Articles />
      </Route>
      <Route exact path="/articles/:topic">
        <Topics />
      </Route>
      <Route exact path="/articles/id/:id">
        <SingleArticle />
      </Route>
      <Route exact path="/account">
        <Account />
      </Route>
      </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
