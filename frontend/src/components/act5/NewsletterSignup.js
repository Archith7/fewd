import React from 'react';

const NewsletterSignup = () => {
  return (
    <div className="newsletter-signup text-center py-5 bg-light">
      <h3>Stay Updated</h3>
      <p>Subscribe to our newsletter for the latest updates and promotions</p>
      <form>
        <input type="email" placeholder="Your Email" className="form-control" />
        <button type="submit" className="btn btn-primary mt-2">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsletterSignup;
