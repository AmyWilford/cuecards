// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/Question";
import AddQuestion from './components/AddQuestion';
import DBQuestion from "./components/AllQuestions";
// import Container from "./components/Container";
import Update from "./components/Update";
import Header from './components/Header';
import Footer from './components/Footer';
// import NewUpdate from "./components/newUpdate";

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Question />} />
        <Route path="/allquestions" element={<DBQuestion />} />
        <Route path="/api/study" element={<AddQuestion />} />
        {/* <Route path="/container" element={<Container />} /> */}
        <Route path="/api/study/:id" element={<Update />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
