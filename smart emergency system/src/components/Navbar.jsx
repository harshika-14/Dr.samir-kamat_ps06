import { useState } from "react";

const Nav = () => {
 

  return (
    <header className="header">
      <div className="header-container">

      
        <div className="logo">
            LIFTALERT
        </div>

        
        <nav className="nav desktop-nav">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#who-benefits">Who Benefits</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <button className="order-btn">Order Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Nav;