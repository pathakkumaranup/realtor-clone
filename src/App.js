import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/sign-in" element={<Signin></Signin>}></Route>
          <Route path="/sign-up" element={<Signup></Signup>}></Route>
          <Route
            path="/forgot-password"
            element={<ForgotPassword></ForgotPassword>}
          ></Route>
          <Route path="/offers" element={<Offers></Offers>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
