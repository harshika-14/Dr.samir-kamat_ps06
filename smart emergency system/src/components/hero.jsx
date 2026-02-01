import React from "react";
import { Shield } from "lucide-react";
import "./Home.css";


const Home = () => {
  return (
    <section className="hero-section">
      
      <div className="hero-bg-glow"></div>

      <div className="hero-container">
        <div className="hero-grid">

          
          <div className="hero-content">
            <div className="hero-badge">
              <Shield size={18} />
              <span>Advanced Safety Technology</span>
            </div>

            <h1>
              Your Safety, <br />
              <span>Always Within Reach</span>
            </h1>

            <p>
              Smart emergency assistance system with instant alerts,
              live location tracking, and rapid response when you need it most.
            </p>

            <div className="hero-actions">
              <button className="primary-btn">
                Order Now – ₹12,999
              </button>
              <button className="secondary-btn">
                Learn More
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <h3>24/7</h3>
                <span>Protection</span>
              </div>
              <div>
                <h3>30s</h3>
                <span>Auto Alert</span>
              </div>
              <div>
                <h3>GPS</h3>
                <span>Live Tracking</span>
              </div>
            </div>
          </div>

          
          <div className="hero-image">
               <img src='car.png' alt="" />       </div>

        </div>
      </div>
    </section>
  );
};

export default Home;