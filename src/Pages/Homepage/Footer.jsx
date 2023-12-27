import React from 'react';
import './Footer.css';

const Footer = () => {
  const links = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Become a Home Helper', path: '/become-a-helper' },
    { name: 'Careers', path: '/careers' },
    { name: 'Terms and Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  return (
    <footer className="footer">
      <div className='container'>

        <div className="contact-us full-width">
            <div className='footer-heading  text-center'>
                  <h2>Contact Us</h2>
            </div>
          <div className='full-width'> 
            <form className='common-form contact-us-form'>
              <div className='form-group'>
                <input className='form-control' type="text" placeholder="Your Name" />
              </div>
              <div className='form-group'>

                <input className='form-control'  type="email" placeholder="Your Email" />
              </div>
              <div className='form-group'>
                <textarea className='form-control' placeholder="Please enter your message here..."></textarea>
              </div>

              <div className='text-center'>
              <button className='btn btn-submit' type='submit'>Submit</button>
              </div>
              
            </form>
          </div>
        </div>
        <div className="links full-width">
          <div className='footer-heading  text-center'>
            <h3>Important Links</h3>
          </div>
          <div className='footer-link-row'>
          <ul>
            {links.map(link => (
              <li key={link.name}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
