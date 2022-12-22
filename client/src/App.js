// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Question from './components/Question'
import NewQuestion from './components/AddQuestion';
import DBQuestion from './components/QuestionDB';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'
        element = {<Home />}
        />
        <Route 
        path='/study'
        element = {<DBQuestion />}
        />
        <Route
        path='/api/study'
          element = {<NewQuestion/>}
          />
      </Routes>
    </Router>
  );
}

export default App;
