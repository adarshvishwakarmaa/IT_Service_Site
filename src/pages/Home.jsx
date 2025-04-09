import React from "react";

const Home = () => {
  return (
    <>
      <main>
        <section className="home">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Innovative Solutions. Reliable Technology.</p>
              <h1>Empowering Digital Growth</h1>
              <p>
                Our mission is to bridge the gap between business and technology
                by delivering impactful IT solutions. Whether it’s a custom web
                application, a scalable cloud infrastructure, or secure backend
                systems, we bring your digital vision to life with precision and
                performance.
              </p>
              <div className="btn btn-group">
                <a
                  href="https://github.com/adarshvishwakarmaa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn">Connect now</button>
                </a>

                <a
                  href="https://crypto-places.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn secondary-btn">Our Website</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/prog.png"
                alt="Program"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Successful Projects Delivered</p>
          </div>

          <div className="div1">
            <h2>20+</h2>
            <p>Global Client Partnerships</p>
          </div>

          <div className="div1">
            <h2>99%</h2>
            <p>Client Satisfaction Rate</p>
          </div>

          <div className="div1">
            <h2>24/7</h2>
            <p>Dedicated Technical Support</p>
          </div>
        </div>
      </section>

      <section className="home">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img
              src="/images/html.webp"
              alt="Program"
              width="400"
              height="500"
            />
          </div>
          <div className="hero-content">
            <p>Empowering Businesses Through Technology</p>
            <h1>Smart IT Solutions for a Connected World</h1>
            <p>
              We provide cutting-edge software and IT services that help
              businesses innovate and scale in today’s fast-paced digital
              landscape. From enterprise applications to secure cloud
              infrastructure, our expert team delivers technology that drives
              efficiency, agility, and growth.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect now</button>
              </a>

              <a
                href="https://ai-chatbotv.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn secondary-btn">Visit Website</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
