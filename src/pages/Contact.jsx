import React, { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <section onSubmit={handleSubmit}>
        <main>
          <div className="contact">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/cont.gif"
                  alt="loginn"
                  width="500"
                  height="500"
                />
              </div>

              <div className="contact-form">
                <h1 className="main-heading mb-3">Contact Us</h1>
                <br />

                <form>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Message</label>
                    <input
                      type="text"
                      name="message"
                      placeholder="message"
                      id="message"
                      required
                      autoComplete="off"
                      value={user.message}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>

      <section className="footer-section">
        <footer className="footer">
          <div className="container grid grid-two-cols">
            <div className="footer-text">
              <h2>Connect with us</h2>
              <p>
                Follow us on social media for the latest updates and tech
                insights.
              </p>
            </div>

            <div className="footer-icons">
              <a
                href="https://www.instagram.com/adarshvishwakarma923"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/adarsh-vishwakarma-a055a1317/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.facebook.com/share/15mdY9h6A5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} CoreAxis IT. All rights reserved.
            </p>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Contact;
