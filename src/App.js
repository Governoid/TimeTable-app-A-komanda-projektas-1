import Login from "./components/Login/Login";
import LostPassword from './components/LostPassword/LostPassword';
import SignUp from './components/SignUp/SignUp'
import Nav from "./components/Nav/Nav";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import SignUp from "./components/signup.component";

function App() {
  return (  
    <Router> 
      <div className="App">
      <Nav />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/lostpassword" element={<LostPassword />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
        </div></Router>
    

  )
}

export default App;
