import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import ProjectList from "./components/ProjectList";
import Resume from "./components/Resume";
import Routes from './Routes';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <Switch>
            {/* <Route exact path="/" render={() => <ProjectList />} />
            <Route path="/resume" render={() => <Resume />} /> */}
            <Route exact path="/">
                <ProjectList />
            </Route>
            <Route exact path="/resume">
                <Resume />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
