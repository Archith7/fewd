import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We offer the best products at the best prices. Shop now!</p>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <ul>
              <li>Email: support@shop.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="social-media">
              <li><a href="#" className="text-white">Facebook</a></li>
              <li><a href="#" className="text-white">Instagram</a></li>
              <li><a href="#" className="text-white">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
