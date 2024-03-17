import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* REACT COMPONENTS */
import { NavBar } from './components/Navbar';
import { Profile } from './components/Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
