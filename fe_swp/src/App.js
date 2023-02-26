import "./styles/App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* <MyHeader></MyHeader> */}
      {/* <Routes> */}
      {/* <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} /> */}
      {/* <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} /> */}
      {/* <Route path='/cart' element={<Cart />} />
        <Route path='/buy/:id/*' element={<Buy />} />
        <Route path='/order/:totalPrice' element={<Order />} />  */}
      {/* <Route path='*' element={<NotFoundPage />} /> */}
      {/* </Routes> */}
      {/* <Footer></Footer> */}
      <Home />
    </div>
  );
}

export default App;
