import { Routes, Route, Link, useParams } from 'react-router-dom';

import './App.css';

const Home = props => {
  return (
    <p> Welcome </p>
  )
}
const Input = () => {
  const {input} = useParams();
  if(isNaN(input)){
    return <p> The Word is: {input}</p>
  } 
  return <p> The Number is: {input} </p>
}

const ColoredInput = () => {
  const {input, color1, color2} = useParams();

  return (
    <div style={{backgroundColor:color1}}>
      <p style={{color:color2}}>The Word is: {input}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:input" element={<Input />} />
        <Route path="/:input/:color1/:color2" element={<ColoredInput/>} />
      </Routes>
    </div>
  );
}

export default App;
