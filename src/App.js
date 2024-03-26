import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* REACT COMPONENTS */
import { NavBar } from './components/Navbar';
import { Profile } from './components/Profile';
import { Skills } from './components/Skills';
import {Work} from './components/Work'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
