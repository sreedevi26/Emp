import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Edit from './page/Edit/Edit';
import Profile from './page/Profile/Profile';
import Register from './page/Register/Register';
import Pagenf from './page/PNF/Pagenf';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<Pagenf/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
