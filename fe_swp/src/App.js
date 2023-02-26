import Login from "./pages/Login";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
function App() {
  return (
    <div className='App'>
      {/* <MyHeader></MyHeader> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/cart' element={<Cart />} />
        <Route path='/buy/:id/*' element={<Buy />} />
        <Route path='/order/:totalPrice' element={<Order />} />  */}
        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
