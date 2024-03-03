import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ma liste de tâches</h1>
        <TaskList />
      </header>
    </div>
  );
}

export default App;
