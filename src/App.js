
import './App.css';
import Header from './components/Header/Header';
import Homepage from './switch/Homepage/Homepage';
import {Switch, Route} from 'react-router-dom'
import Articles from './switch/Articles/Articles';

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
      </Switch>
    </div>
  );
}

export default App;
