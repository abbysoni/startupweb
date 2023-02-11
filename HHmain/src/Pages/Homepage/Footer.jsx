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
    <section className="contact-us">
    <h2>Contact Us</h2>
    <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Please enter your message here..."></textarea>
        <input type="submit" value="Submit" />
    </form>
</section>
      <div className="links">
        <h3>Important Links</h3>
        <ul>
          {links.map(link => (
            <li key={link.name}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

//<div className="contact-us">
      //   <h3>Contact Us</h3>
      //   <p>
      //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
      //     libero id lectus dictum, at congue justo blandit.
      //   </p>
      //   <p>
      //     Phone: +1234567890 <br />
      //     Email: info@serviceprovider.com
      //   </p>
      // </div>

export default Footer;
