// import logo from './logo.svg';
import './App.css';
import Hw1 from './components/Hw1';
import Hw2 from './components/Hw2';
import Practice1 from './components/Practice1';
import Practice2 from './components/Practice2';

function App() {
  return (
    <div className="App">
      <Practice1 name="Mariia" />
      <Practice2 name="Мария" />
      <Hw1 />
      <Hw2 />
    </div>
  );
}

export default App;
