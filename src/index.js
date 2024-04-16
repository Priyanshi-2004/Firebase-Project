import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AddQuzi from './Pages/AddQuzi';
import LoginContext from './Context/LoginContext';

let router=createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'register',
    element:<Register/>
  },
  {
    path:'question',
    element:<AddQuzi/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContext>
       <RouterProvider router={router}/>
    </LoginContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
