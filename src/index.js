import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {

  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={ <Login />}/>
    <Route path='/SignUp' element={ <SignUp />}/>
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


