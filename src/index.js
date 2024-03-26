import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import test from './test'
import ViewModel from './components/ViewModel';

import {

  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App /*uiState={ ViewModel().uiState}*/ />}/>
    <Route path='/Login' element={ <Login />}/>
    <Route path='/SignUp' element={<SignUp />} />
    {/* <Route path='/test' element={test} /> */}

    </>
    


  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
    {/* <App /> */}
  </React.StrictMode>
);


