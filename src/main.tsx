import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import Head from "./components/Head.tsx";
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
                    <Home />
                  </>
                }
              />
              <Route
                path="/oferta/"
                element={
                  <>
                    <Oferta />
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
                    <Kontakt />
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
