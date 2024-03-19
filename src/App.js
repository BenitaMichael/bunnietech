import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* REACT COMPONENTS */
import { NavBar } from './components/Navbar';
import { Profile } from './components/Profile';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Skills />
    </div>
  );
}

export default App;
