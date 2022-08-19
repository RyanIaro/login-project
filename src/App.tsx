import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthRoute } from './components/AuthRoute';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './config/Initialize';

initializeApp(firebaseConfig);

function App():React.ReactElement {
return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <AuthRoute>
          <Home/>
        </AuthRoute>
      }/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>
);
}

export default App;
