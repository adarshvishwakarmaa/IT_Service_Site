import React from "react";

const About = () => {
  return (
    <>
      <main>
        <section className="home about">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Driven by Passion, Powered by Technology</p>

              <h1>About Our IT Company</h1>

              <p>
                We are a dynamic IT solutions provider, dedicated to helping
                businesses leverage technology for growth and innovation. With a
                client-first approach, we deliver customized software, scalable
                cloud infrastructures, and reliable web applications that drive
                real impact.
              </p>

              <p>
                Our team is composed of skilled developers, strategists, and
                designers who thrive on turning complex challenges into seamless
                digital solutions. From startups to enterprises, we empower
                clients to transform their ideas into robust, future-ready
                platforms.
              </p>

              <p>
                Our core values — innovation, transparency, and commitment — are
                embedded in every project we deliver. Whether it’s optimizing
                workflows or building end-to-end digital ecosystems, we are your
                trusted partner in every step of your digital journey.
              </p>

              <p>
                Backed by years of expertise and a passion for emerging
                technologies, we don’t just build solutions — we build
                long-lasting relationships.
              </p>

              <div className="btn btn-group">
                <a href="https://myx-portfolio.netlify.app/">
                  <button className="btn">Visit Profile</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">
                    Explore Services
                  </button>
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/images/learn.png"
                alt="About Us"
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
            <h2>100K+</h2>
            <p>Lines of Code Deployed</p>
          </div>

          <div className="div1">
            <h2>15+</h2>
            <p>Industries Served Worldwide</p>
          </div>

          <div className="div1">
            <h2>4.9/5</h2>
            <p>Average Client Rating</p>
          </div>

          <div className="div1">
            <h2>10+</h2>
            <p>Years of Combined Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
