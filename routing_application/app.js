import React, { useState, useEffect } from 'react';
import { Home, User, Mail, Phone, MapPin, Calendar, Star, Settings } from 'lucide-react';


const WelcomeSection = () => (
  <div className="bg-blue-50 p-8 rounded-lg mb-6">
    <h2 className="text-2xl font-bold text-blue-800 mb-4">Welcome to Our App</h2>
    <p className="text-blue-600">
      This is a modern React application with routing capabilities. Navigate through different pages using the navbar above.
    </p>
  </div>
);


const FeaturesSection = () => (
  <div className="bg-green-50 p-8 rounded-lg mb-6">
    <h2 className="text-2xl font-bold text-green-800 mb-4">Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center space-x-2">
        <Star className="text-green-600" size={20} />
        <span>Custom React Routing</span>
      </div>
      <div className="flex items-center space-x-2">
        <Settings className="text-green-600" size={20} />
        <span>Component-based Architecture</span>
      </div>
    </div>
  </div>
);


const StatsSection = () => (
  <div className="bg-purple-50 p-8 rounded-lg">
    <h2 className="text-2xl font-bold text-purple-800 mb-4">Statistics</h2>
    <div className="grid grid-cols-3 gap-4 text-center">
      <div>
        <div className="text-3xl font-bold text-purple-600">150+</div>
        <div className="text-purple-500">Components</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-purple-600">50+</div>
        <div className="text-purple-500">Pages</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-purple-600">1000+</div>
        <div className="text-purple-500">Users</div>
      </div>
    </div>
  </div>
);


const CompanyInfo = () => (
  <div className="bg-indigo-50 p-8 rounded-lg mb-6">
    <h2 className="text-2xl font-bold text-indigo-800 mb-4">About Our Company</h2>
    <p className="text-indigo-600 mb-4">
      We are a technology company focused on creating innovative solutions for modern web applications.
      Our team is passionate about delivering high-quality software that makes a difference.
    </p>
    <p className="text-indigo-600">
      Founded in 2020, we have grown to become a trusted partner for businesses worldwide.
    </p>
  </div>
);


const TeamSection = () => (
  <div className="bg-orange-50 p-8 rounded-lg mb-6">
    <h2 className="text-2xl font-bold text-orange-800 mb-4">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-2 flex items-center justify-center">
          <User className="text-orange-600" size={24} />
        </div>
        <h3 className="font-semibold">John Doe</h3>
        <p className="text-orange-600">CEO & Founder</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-2 flex items-center justify-center">
          <User className="text-orange-600" size={24} />
        </div>
        <h3 className="font-semibold">Jane Smith</h3>
        <p className="text-orange-600">CTO</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-2 flex items-center justify-center">
          <User className="text-orange-600" size={24} />
        </div>
        <h3 className="font-semibold">Mike Johnson</h3>
        <p className="text-orange-600">Lead Developer</p>
      </div>
    </div>
  </div>
);


const MissionSection = () => (
  <div className="bg-teal-50 p-8 rounded-lg">
    <h2 className="text-2xl font-bold text-teal-800 mb-4">Our Mission</h2>
    <p className="text-teal-600">
      To empower businesses with cutting-edge technology solutions that drive growth and innovation.
      We believe in creating software that not only meets current needs but anticipates future challenges.
    </p>
  </div>
);


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };


  return (
    <div className="bg-gray-50 p-8 rounded-lg mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};


const ContactInfo = () => (
  <div className="bg-blue-50 p-8 rounded-lg mb-6">
    <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact Information</h2>
    <div className="space-y-3">
      <div className="flex items-center space-x-3">
        <Mail className="text-blue-600" size={20} />
        <span className="text-blue-700">contact@company.com</span>
      </div>
      <div className="flex items-center space-x-3">
        <Phone className="text-blue-600" size={20} />
        <span className="text-blue-700">+1 (555) 123-4567</span>
      </div>
      <div className="flex items-center space-x-3">
        <MapPin className="text-blue-600" size={20} />
        <span className="text-blue-700">123 Tech Street, Silicon Valley, CA</span>
      </div>
    </div>
  </div>
);


const OfficeHours = () => (
  <div className="bg-yellow-50 p-8 rounded-lg">
    <h2 className="text-2xl font-bold text-yellow-800 mb-4">Office Hours</h2>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-yellow-700">Monday - Friday:</span>
        <span className="text-yellow-600">9:00 AM - 6:00 PM</span>
      </div>
      <div className="flex justify-between">
        <span className="text-yellow-700">Saturday:</span>
        <span className="text-yellow-600">10:00 AM - 4:00 PM</span>
      </div>
      <div className="flex justify-between">
        <span className="text-yellow-700">Sunday:</span>
        <span className="text-yellow-600">Closed</span>
      </div>
    </div>
  </div>
);


const HomePage = () => (
  <div className="space-y-6">
    <WelcomeSection />
    <FeaturesSection />
    <StatsSection />
  </div>
);


const AboutPage = () => (
  <div className="space-y-6">
    <CompanyInfo />
    <TeamSection />
    <MissionSection />
  </div>
);


const ContactPage = () => (
  <div className="space-y-6">
    <ContactForm />
    <ContactInfo />
    <OfficeHours />
  </div>
);


const Navbar = ({ currentPage, onNavigate, handleUrlChange }) => {
  const isActive = (page) => currentPage === page;
 
  const handleNavClick = (page, path) => {
    onNavigate(page);
    handleUrlChange(path);
  };
 
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">RA</span>
            </div>
            <span className="text-xl font-bold text-gray-800">ReactApp</span>
          </div>
         
          <div className="flex space-x-1">
            <button
              onClick={() => handleNavClick('home', '/')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('home')
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              <Home size={18} />
              <span>Home</span>
            </button>
           
            <button
              onClick={() => handleNavClick('about', '/about')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('about')
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              <User size={18} />
              <span>About</span>
            </button>
           
            <button
              onClick={() => handleNavClick('contact', '/contact')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('contact')
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              <Mail size={18} />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');


  
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/about') {
        setCurrentPage('about');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };


    handlePopState();


    window.addEventListener('popstate', handlePopState);


    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);


  const handleNavigation = (page) => {
    setCurrentPage(page);
  };


  const handleUrlChange = (path) => {
    // Update browser URL and history
    window.history.pushState({}, '', path);
  };


  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigation}
        handleUrlChange={handleUrlChange}
      />
     
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderCurrentPage()}
      </main>
     
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 ReactApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};


export default App;
