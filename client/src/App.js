// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Question from './components/Question'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'
        element = {<Home />}
        />
        <Route 
        path='/study'
        element = {<Question />}
        />
      </Routes>
    </Router>
  );
}

export default App;
