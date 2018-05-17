import React from 'react';
import Navbar from './Navbar';
import NavBurger from './NavBurger';
import Home from './Home';
import Dev from './Dev';
import Ux from './Ux';
import Misc from './Misc';
import Contact from './Contact';
import Footer from './Footer';

const Main = () =>
  (
    <div id="whole-view">
        <Navbar />
        <NavBurger/>
        <div id="right-view">
          <Home />
          <Dev />
          <Ux />
          <Misc />
          <Contact />
          <Footer />
        </div>
    </div>
  )

export default Main;
