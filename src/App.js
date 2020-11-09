import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';

const App = () => {

  return (
    <div className="App">
      <header>
        <Header />
        <Navbar />
        <ProjectList />
      </header>
    </div>
  );
}

export default App;
