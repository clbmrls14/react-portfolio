import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import ProjectList from "./components/ProjectList";
import Resume from "./components/Resume";
import SkillList from "./components/SkillList";
import ProjectDetails from "./components/ProjectDetails";
import RelevantProjects from './components/RelevantProjects';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={ProjectList} />
          <Route path="/resume" component={Resume} />
          <Route path="/skills" component={SkillList} />
          <Route path="/details/:slug" component={ProjectDetails} />
          {/* <Route path="/languages/:id" component={RelevantProjects} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
