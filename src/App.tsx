import React from 'react';
import Header from "./conponents/layout/Header";
import Footer from "./conponents/layout/Footer";
import Content from "./conponents/layout/Content";
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
