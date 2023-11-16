import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './Page.css';
import Login from './login';

const FrontPage = () => {
    return (
      <div>
         <header className="fixed-header">
        <div className='name' style={{ fontFamily: 'Biome, sans-serif' }}>
          <span style={{ marginTop: '0px', marginLeft: '10px', marginRight: '20px', fontSize: '50px' }}>WingIT</span>
        </div>
        <div className="header" style={{ fontFamily: 'Biome, sans-serif' }}>
          <ScrollLink to="home" className="nav-link" style={{ marginLeft: '15px', marginRight: '15px' }} smooth={true} duration={500}>Home</ScrollLink>
          <ScrollLink to="features" className="nav-link" style={{ marginLeft: '15px', marginRight: '15px' }} smooth={true} duration={500}>Features</ScrollLink>
          <ScrollLink to="about" className="nav-link" style={{ marginLeft: '15px', marginRight: '15px' }} smooth={true} duration={500}>About Us</ScrollLink>
          <RouterLink to="/login" className="login-button">Login</RouterLink>
        </div>
      </header>
  
         {/* Home Section */}
         <Element name="home" className="section home">
          <section className="container">
            <div className="content">
              <h1 className="title">Welcome to WingIT</h1>
              <p className="description">
                Soaring Beyond Boundaries, One Innovation at a Time.
              </p>
            </div>
          </section>
        </Element>
  
        {/* Features Section */}
        <Element name="features" className="section features">
          <section className="container-features">
            <div className="content">
              <h2 className="subtitle">Our Features</h2>
              <p className="description">
                Explore the amazing features we offer.
              </p>
            </div>
          </section>
        </Element>
  
        {/* About Us Section */}
        <Element name="about" className="section about">
          <section className="container-about">
            <div className="content">
              <h2 className="subtitle">About Us</h2>
              <p className="description">
                Learn more about our company and mission.
              </p>
            </div>
          </section>
        </Element>
      </div>
    );
  };
  
  export default FrontPage;







