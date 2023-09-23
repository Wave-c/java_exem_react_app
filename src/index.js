import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root.jsx";
import ErrorPage from './components/error-page.jsx';
import SignInForm from './components/shared/SignInForm/SignInForm.component.jsx';
import RegisterForm from './components/shared/RegisterForm/RegisterForm.component.jsx';
import Room from './components/shared/Room/Room.component.jsx';
import Accaunt from './components/shared/Accaunt/Accaunt.component.jsx';
import ToRentOut from './components/shared/ToRentOut/ToRentOut.component';
import ApplicationsList from './components/shared/ApplicationsList/ApplicationsList.component';

const router = createBrowserRouter([{
  path: "/",
  element: <Root/>,
  errorElement: <ErrorPage/>,
},
{
  path: "sign-in-form",
  element: <SignInForm/>
},
{
  path: "register-form",
  element: <RegisterForm/>
},
{
  path: "rooms/:id",
  element: <Room/>
},
{
  path: "accaunt",
  element: <Accaunt/>
},
{
  path: "to-rent-out",
  element: <ToRentOut/>
},
{
  path: "accaunt/applications",
  element: <ApplicationsList/>
}]);

require('events').EventEmitter.defaultMaxListeners = 11;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
