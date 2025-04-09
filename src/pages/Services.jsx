

import React from "react";

const Services = () => {
  return (
    <>
      <main>
        <section className="home services">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Empowering Your Business Through Technology</p>
              <h1>Our IT Services</h1>
              <p>
                We offer a comprehensive range of IT services designed to drive digital transformation and accelerate business growth. From custom software development and cloud solutions to cybersecurity and data analytics, our expert team delivers solutions that are tailored to your unique needs.
              </p>
              <p>
                Backed by years of industry expertise and a commitment to innovation, we collaborate closely with you to understand your business objectives, ensuring every solution we deliver is both impactful and sustainable.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Get in Touch</button>
                </a>
                <a href="/about">
                  <button className="btn secondary-btn">Learn More About Us</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/ser.png"
                alt="Our Services"
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>100+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="div1">
            <h2>30+</h2>
            <p>Expert IT Consultants</p>
          </div>

          <div className="div1">
            <h2>95%</h2>
            <p>Client Satisfaction</p>
          </div>

          <div className="div1">
            <h2>24/7</h2>
            <p>Support & Maintenance</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

