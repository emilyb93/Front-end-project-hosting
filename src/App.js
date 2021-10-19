
import './App.css';
import Header from './components/Header/Header';
import Homepage from './switch/Homepage/Homepage';
import {Switch, Route} from 'react-router-dom'
import Articles from './switch/Articles/Articles';
import Topics from './switch/Topics/Topics';

function App() {
  return (
    <div className="App">
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
      </Switch>
    </div>
  );
}

export default App;
