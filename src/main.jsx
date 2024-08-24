import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import { Root } from './routes/Root.jsx';
import { About } from './routes/About.jsx';
import { Contact } from './routes/Contact.jsx';
import { Skills } from './routes/Skills.jsx';
import { Work } from './routes/Work.jsx';
import ErrorPage from './error-page.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/work",
    element: <Work />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
