import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './global_components/error_page';
import Landing from './login/Landing';
import Login from './login/Login';
import SignUp from './login/SignUp';
import Dashboard from './dashboard/Dashboard';
import NewElection from './election_setup/NewElection';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "welcome",
    element: <Landing />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "sign-up",
    element: <SignUp />
  },
  {
    path: "dashboard",
    element: <Dashboard />
  },
  {
    path: "new-election",
    element: <NewElection />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
