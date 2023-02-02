import React from 'react';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Content from "./components/layout/Content";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Content/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
