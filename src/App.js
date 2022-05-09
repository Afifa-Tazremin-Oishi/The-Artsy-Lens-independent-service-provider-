import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Registration/Login/Login';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Register from './Pages/Registration/Register/Register'
import NotFound from './Pages/Shared/NotFound/NotFound';
import Checkout from './Pages/CheckOut/Checkout';
import RequiredAuth from './Pages/Registration/RequiredAuth/RequiredAuth';
import Services from './Pages/Home/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/home#services" element={<Services></Services>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/service/:serviceId' element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>}>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;