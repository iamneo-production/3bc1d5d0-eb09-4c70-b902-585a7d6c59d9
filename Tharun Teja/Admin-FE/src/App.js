import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import AppliedLoans from "./pages/AppliedLoans"
import AllLoans from "./pages/AllLoans"
import LoansAfterDecision from './pages/LoansAfterDecision';
import LoanDetails from './pages/LoanDetails';
import Modal from "./pages/Modal";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/AppliedLoans"element={<AllLoans />} />
        <Route path='/loanDetails' element={<LoansAfterDecision />} />
        <Route path="/Modal"element={<Modal />} />
      </Routes>
    </Router>
  );
}

export default App;
