import Home from "./pages/home/Home";
import Index from "./pages/index/Index"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import About from "./pages/about/About"
import KurtKid from "./pages/kurtkid/KurtKid";
import Success from "./pages/success/Success"
import ContactSuccess from "./pages/success/ContactSuccess"
import { HashRouter, Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import { Context } from "./context/Context"
import Contact from './pages/contact/Contact';
import Construct from './pages/construct/Construct';


function App() {
  const { user } = useContext(Context);

  return (
<HashRouter> 
        <Routes>
          <Route exact path="/" element={<Index/>} />
          <Route exact path="/KurtKid" element={<KurtKid/>} />
          <Route exact path="/blog" element={<Home/>} />
          <Route exact path="/construct" element={<Construct/>} />
          <Route path="/register" element={user ? <Home /> : <Register/>} />
          <Route path="/login" element={user ? <Home /> : <Login/>} />
          <Route path="/write" element={user ? <Write /> : <Register/>} />
          <Route path="/settings" element={user ? <Settings/> : <Register/>} />
          <Route path="/post/:postId" element={<Single/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/success" element={<Success/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/contactsuccess" element={<ContactSuccess/>} />
        </Routes>
    </HashRouter>
  );
}

export default App;
