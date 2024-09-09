import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Catolog from "./pages/catolog/Catolog";
import Warranty from "./pages/warranty/Warranty";
import Feedback from "./pages/feedback/Feedback";
import Sale from "./pages/sale/Sale";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Article from "./pages/all-article/Article";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="catolog" element={<Catolog />} />
          <Route path="warranty" element={<Warranty />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="sale" element={<Sale />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="article" element={<Article />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
