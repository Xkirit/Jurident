import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './pages/News';
import TaskOverview from './pages/TaskOverview';
import Faq from './pages/Faq';
import Terms from './pages/Terms';
import Refunds from './pages/Refunds';
import Profile from './pages/Profile';
import Feedback from './pages/Feedback';
import './App.css';
import Hero from './components/Hero';
import Contactus from './pages/Contactus';
import Register from './pages/Register';
import Aboutus from './pages/Aboutus';
import LawyerSignIn from './pages/LawyerSignIn';
import LawyerSignUp from './pages/LawyerSignUp';
import ClientSignIn from './pages/ClientSignIn';
import ClientSignUp from './pages/ClientSignUp';
import Cases from './pages/Cases';
import Bareact from './pages/bareact';
function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/tasks" element={<TaskOverview />} />
        <Route path="/calendar" element={<TaskOverview />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/news" element={<News />} />
        <Route path="/" element={<Hero/>}/>
        <Route path="/cases" element={<Cases/>}/>
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/aboutus" element={< Aboutus/>}/>
        <Route path="/LawyerSignIn" element={< LawyerSignIn/>}/>
        <Route path="/LawyerSignUp" element={< LawyerSignUp/>}/>
        <Route path="/ClientSignIn" element={< ClientSignIn/>}/>
        <Route path="/ClientSignUp" element={< ClientSignUp/>}/>
        <Route path="/bareact" element={< Bareact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
