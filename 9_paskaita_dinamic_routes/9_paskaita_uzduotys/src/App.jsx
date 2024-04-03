import React from "react";
import Body from "./pages/Body";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Body />
      <Footer />
    </Router>
  );
};

export default App;
