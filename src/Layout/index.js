import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import ContactPage from "./ContactPage";
import Footer from "./Footer";
import "../App.css";

function Layout() {
    return (
      <>
      <Header />
      <Switch>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactPage />} />
      </Switch>
      <Footer />
      </>
    );
  }
  
export default Layout;
  