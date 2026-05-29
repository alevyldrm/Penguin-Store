import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

import { store } from "./app/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthContext";

import { Toaster } from "react-hot-toast";


createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#222831",
                color: "#DFD0B8",
                border: "1px solid #948979",
                borderRadius: "16px",
              },
            }}
          />
          <App />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </>,
)