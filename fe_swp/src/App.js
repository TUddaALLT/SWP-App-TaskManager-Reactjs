import Login from "./pages/Login";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      {/* <MyHeader></MyHeader> */}
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} /> */}
        <Route path='/login' element={<Login />} />
     
      
        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
