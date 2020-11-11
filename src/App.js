import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import ProjectList from "./components/ProjectList";
import Resume from "./components/Resume";
import SkillList from "./components/SkillList";

const App = () => {

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={ProjectList} />
          <Route path="/resume" component={Resume} />
          <Route path="/skills" component={SkillList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
