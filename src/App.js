import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Explore from "./pages/Explore"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ForgetPassword from "./pages/ForgetPassword"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore/>} />
          <Route path="/offers" element={<Offers/>} />
          <Route path="/profile" element={<SignIn/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/forget-password" element={<ForgetPassword/>} />

        </Routes>
      </Router>
      {/* navbar */}
    </>
  );
}

export default App;
