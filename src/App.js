import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/navTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/footer"
// import Blog from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
      <Footer/>

    </Router>
  );
}

export default App;
