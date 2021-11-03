import PersonCard from './components/PersonCard';
import './App.css';


function App() {
  return (
    <div className="App">
      <PersonCard firstName="Gomez" lastName="Addams" age={50} hairColor="Black"/>
      <PersonCard firstName="Morticia" lastName="Addams" age={30} hairColor="Black"/>
      <PersonCard firstName="Wednesday" lastName="Addams" age={12} hairColor="Black"/>
      <PersonCard firstName="Pugsley" lastName="Addams" age={30} hairColor="Black"/>
      <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
    </div>
  );
}

export default App;
