import React from "react";
import './Home.css';

function ServiceProvider() {
    return (
        <div>
        <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <nav className="navbar">
        <a to="/become-a-professional">Become a Professional</a>
        <a to="/help">Help</a>
        <a to="/login">Login</a>
        <a to="/sign-up">Sign Up</a>
      </nav>
    </header>
            <section className="hero">
                
                <section style={{
                  background: 'linear-gradient(to bottom, #f7e9e9, #f2d1d1)',
                  height: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop:'160px'
                }}>
                  <h1 style={{
                    color: 'black',
                    fontSize: '3em',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '2em',
                  }}>
                    Home Service on Demand
                  </h1>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    marginBottom: '2em',
                  }}>
                    <input type="text" placeholder="City Picker" style={{
                      padding: '1em',
                      fontSize: '1em',
                      border: 'none',
                      borderRadius: '5px',
                      marginRight: '1em',
                    }} />
                    <input type="text" placeholder="Search for Service" style={{
                      padding: '1em',
                      fontSize: '1em',
                      border: 'none',
                      borderRadius: '5px',
                    }} />
                  </div>
                </section>
            </section>
            <section className="services">
                <h2>Our Services</h2>
                <div className="service">
                    <h3>AC Repairing</h3>
                    <p>We offer quick and reliable AC repairing services.</p>
                </div>
                <div className="service">
                    <h3>RO Service</h3>
                    <p>We provide efficient RO service for your home needs.</p>
                </div>
                <div className="service">
                    <h3>Cleaning</h3>
                    <p>We offer thorough cleaning services for your home.</p>
                </div>
            </section>
            <section className="contact-us">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </section>
            <footer className="footer">
                <p>&copy; Service Provider 2023</p>
            </footer>
        </div>
    );
}

export default ServiceProvider;
