import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import topimage from '../images/body_image.webp';
import { ShieldCheck, Calendar, Heart, Plus, Minus } from 'lucide-react';

function Home() {
  const [activeIndex, setActiveIndex] = useState(0); // First item open

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionData = [
    {
      title: 'Experienced caregivers',
      content: 'Our team consists of highly skilled nurses with years of experience in home healthcare.'
    },
    {
      title: 'Compassionate approach',
      content: 'We focus on empathy and emotional support while delivering professional medical services.'
    },
    {
      title: 'Personalized care plans',
      content: 'Each patient receives a customized care plan tailored to their specific needs and preferences.'
    }
  ];

  return (
    <div className="top-body">
      {/* Hero Section */}
      <div className="image-container">
        <img src={topimage} alt="Home Nursing" className="home-image" />
        <div className="overlay-content">
          <h1>PERSONAL HOME NURSING CARE</h1>
          <h3>
            Connect with certified nurses for personalized healthcare services in the comfort of your home. Quality care, whenever you need it.
          </h3>
          <div className="button-group">
            <Link to="/book-nurse"><button>Find a Nurse</button></Link>
            <Link to="/register"><button>Join as a Nurse</button></Link>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose CareConnect?</h2>
        <p className="section-subtitle">
          We provide reliable, professional home nursing services with verified healthcare professionals.
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <ShieldCheck className="feature-icon" color="#2563eb" size={40} />
            <h3>Verified Professionals</h3>
            <p>All nurses are licensed, certified, and thoroughly background-checked.</p>
          </div>
          <div className="feature-item">
            <Calendar className="feature-icon" color="#059669" size={40} />
            <h3>Flexible Scheduling</h3>
            <p>Book appointments that fit your schedule with real-time availability.</p>
          </div>
          <div className="feature-item">
            <Heart className="feature-icon" color="#ef4444" size={40} />
            <h3>Compassionate Care</h3>
            <p>Personalized healthcare services delivered with empathy and professionalism.</p>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="accordion-section">
        <h2 className="section-title">Why choose <span className="highlight">Nursing Care</span></h2>
        <div className="accordion-wrapper">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion-header">
                <h3>{item.title}</h3>
                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </div>
              {activeIndex === index && <p className="accordion-content">{item.content}</p>}
            </div>
          ))}
        </div>
      </section>


            {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-heading">Join our <span className="highlight">community of care</span></h2>
        <p className="cta-subtext">
          At Nursing Care, we're here to provide compassionate and personalized care to you or your loved ones.
        </p>
        <Link to="/register">
          <button className="cta-button">Get started</button>
        </Link>
      </section>

            {/* About Nursing Care Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-images">
            <div className="img-wrapper">
                      <img src="https://cdn.prod.website-files.com/664dc2c72953cea4ef68aa48/66503c2a844eccf703fcd355_about-01.jpg" />   
              </div>
            <div className="img-wrapper relative">
                      <img src="https://cdn.prod.website-files.com/664dc2c72953cea4ef68aa48/66503c2b3a4a24eff044f790_about-02.jpg" />
              <div className="experience-badge">
                <span className="years">10+</span>
                <span className="label">Years of Experience</span>
              </div>
            </div>
          </div>
          <div className="about-text">
            <span className="tag">Who we are</span>
            <h2 className="about-title">About <span className="highlight">Nursing Care</span></h2>
            <p>
              We are dedicated to delivering exceptional healthcare services with compassion and expertise.
              With a commitment to patient-centered care, our team of healthcare professionals strives to provide
              comprehensive medical treatments tailored to individual needs.
            </p>
            <Link to="/about">
              <button className="learn-more-btn">Learn more</button>
            </Link>
          </div>
        </div>
      </section>

            {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          {/* Left Column: Logo & Newsletter */}
          <div className="footer-left">
            <h2 className="footer-logo">
              <span className="plus-icon">+</span> Nursing Care
            </h2>
            <p className="newsletter-text">Stay updated with our newsletter</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-x-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>

          {/* Middle Columns: Links */}
          <div className="footer-links">
            <div>
              <h4>Pages</h4>
              <ul>
                <li>Home</li>
                <li>Home 2</li>
                <li>About</li>
                <li>Service</li>
                <li>Service Static</li>
              </ul>
            </div>
            <div>
              <h4>Utility Pages</h4>
              <ul>
                <li>Style Guide</li>
                <li>Instructions</li>
                <li>Licenses</li>
                <li>Changelog</li>
                <li>Link in Bio</li>
              </ul>
            </div>
            <div>
              <h4>More</h4>
              <ul>
                <li>Coming soon</li>
                <li>Error 404</li>
                <li>Password Protected</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="footer-contact">
            <h4>Contact information</h4>
            <p><strong>Address</strong><br />Madurai Nerimedu Main road<br />Tamil Nadu 625002</p>
            <p><strong>Phone</strong><br /><a href="tel:+11234567890"> (+91)8428399876</a></p>
            <p><strong>E-mail</strong><br /><a href="mailto:hello@example.com">welcome@gmail.com</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Designed by <a href="#">Mani</a>, Powered by <a href="#">nothing</a>
          </p>
        </div>
      </footer>



    </div>
  );
}

export default Home;
