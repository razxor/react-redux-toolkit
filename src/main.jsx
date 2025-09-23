
import React, { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'

import { ThemeProvider } from "./context/ThemeContext";

import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import router from './routers'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>  
    {/* <App /> */}
      <RouterProvider router={router} />
  </Provider>
  // </StrictMode>,


  // <ThemeProvider>
  //   <App />
  // </ThemeProvider>
)
