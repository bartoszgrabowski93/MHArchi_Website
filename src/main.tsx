import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import Offer from "./components/Offer.tsx";
import Portfolio from "./components/Portfolio.tsx";
import Head from "./components/Head.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <header>
          <Head />
        </header>
        <body>
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <App />
                  </>
                }
              />
              <Route
                path="/oferta/"
                element={
                  <>
                    <Offer />
                  </>
                }
              />
              <Route
                path="/portfolio/"
                element={
                  <>
                    <Portfolio />
                  </>
                }
              />
              <Route
                path="/kontakt/"
                element={
                  <>
                    <Contact />
                  </>
                }
              />
            </Routes>
          </div>
        </body>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
