import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import ProjectList from "./components/ProjectList";
import Resume from "./components/Resume";
import SkillList from "./components/SkillList";
import ProjectDetails from "./components/ProjectDetails";
import Languages from './components/Languages';
import Platforms from './components/Platforms';
import Technologies from './components/Technologies';
import AddProject from './components/AddProject';
import EditProject from './components/EditProject';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={ProjectList} />
          <Route path="/resume" component={Resume} />
          <Route path="/skills" component={SkillList} />
          <Route path="/addproject/" component={AddProject} />
          <Route path="/details/:slug" component={ProjectDetails} />
          <Route path="/edit/:slug" component={EditProject} />
          <Route path="/languages/:id" component={Languages} />
          <Route path="/platforms/:id" component={Platforms} />
          <Route path="/technologies/:id" component={Technologies} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
