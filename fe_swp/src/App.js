import Login from "./pages/Login";
import NotFoundPage from "./components/NotFoundPage";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import dashboard from "./pages/DashBoard";
import ResponsiveAppBar from "./components/NavBar";

function App() {
  return (
    <div className='App'>
      {/* <MyHeader></MyHeader> */}
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} /> */}
        <Route path='/login' element={<Login />} />
     
        
        <Route path='*' element={<dashboard/>}/>
        {/* <Route path='*' element={<NotFoundPage />}/> */}
      </Routes>
      {/* <Footer></Footer> */}
      
      {ResponsiveAppBar()}
        
      
    </div>
  );
}

export default App;
