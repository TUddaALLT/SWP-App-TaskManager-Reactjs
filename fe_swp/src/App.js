import "./styles/App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
  return (
    <div className='App'>
      {/* <MyHeader></MyHeader> */}
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />
        <Route path='/user' element={<User />} />

        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
