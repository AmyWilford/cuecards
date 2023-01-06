// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/Question";
import NewQuestion from "./components/AddQuestion";
import DBQuestion from "./components/AllQuestions";
import Container from "./components/Container";
import Update from "./components/Update";
import NewUpdate from "./components/newUpdate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Question />} />
        <Route path="/allquestions" element={<DBQuestion />} />
        <Route path="/api/study" element={<NewQuestion />} />
        <Route path="/container" element={<Container />} />
        <Route path="/api/study/:id" element={<NewUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
