import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Footer from './Components/Footer';
import View from './Components/View';
import Home from './Components/Home';
import CreateCard from './Components/CreateCard';
import CreateClass from './Components/CreateClass';
import About from './Components/About';
import BasePage from './Components/BasePage';
import Search from './Components/Search';

function App() {
  const [changeUI, setChangeUI] = useState(false);
  const changeUIHandler = () => {
    setChangeUI(true);
  }
  return (
    <>

      <div className='mt-24 h-full'>
        <BrowserRouter>
          <Navbar changeUI={changeUI} />
          <Routes>
            <Route path='/' element={<BasePage changeUI={changeUIHandler} />}>
              <Route path='/' element={<Home />}></Route>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/search' element={<Search />}></Route>
              <Route path='/about' element={<About />}></Route>
            </Route>
            
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
              <Route path='/view' element={<View changeUI={changeUIHandler} />}></Route>
              <Route path='/create-card' element={<CreateCard changeUI={changeUIHandler} />}></Route>
              <Route path='/create-class' element={<CreateClass changeUI={changeUIHandler} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      {/* {
        changeUI &&
        <Footer/>

      } */}
    </>

  );
}

export default App;
