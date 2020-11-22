import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/generics/Header';
import ProjectList from "./components/ProjectList";
import Resume from "./components/Resume";
import SkillList from "./components/SkillList";
import ProjectDetails from "./components/ProjectDetails";
import Languages from './components/Languages';
import Platforms from './components/Platforms';
import Technologies from './components/Technologies';
import AddProject from './components/AddProject';
import EditProject from './components/EditProject';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import Loading from './components/generics/Loading';
import ProtectedRoute from './authorization/protected-route';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ProjectList} />
        <Route path="/resume" component={Resume} />
        <Route path="/skills" component={SkillList} />
        <ProtectedRoute path="/addproject/" component={AddProject} />
        <Route path="/details/:slug" component={ProjectDetails} />
        <ProtectedRoute path="/edit/:slug" component={EditProject} />
        <Route path="/languages/:id" component={Languages} />
        <Route path="/platforms/:id" component={Platforms} />
        <Route path="/technologies/:id" component={Technologies} />
      </Switch>
    </div>
  );
}

export default App;
