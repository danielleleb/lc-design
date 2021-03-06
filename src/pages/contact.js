import React from "react"
import themeLogo from "../images/logo.svg"
import SR from "../components/ScrollReveal"
import "../scss/style.scss"

const themeImages = {
  themeLogo
};
// import Layout from "../components/layout"

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packageType: "",
      value: null
    }
  }
  componentDidMount() {
    let url = new URL(document.URL);
    if (url.searchParams.get("type")) {
      this.setState({
        packageType: url.searchParams.get("type"),
        value: url.searchParams.get("type")
      })
    }
    
    const doc = document.documentElement

    doc.classList.remove("no-js")
    doc.classList.add("js")

    document.body.classList.add("is-boxed")
    document.body.classList.add("has-animations")
    document.body.classList.add("is-loaded")

    // Reveal animations
    if (document.body.classList.contains("has-animations")) {
      SR.reveal(".features .section-title, .features-illustration, .feature", {
        delay: 300,
        duration: 600,
        distance: "60px",
        easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        origin: "bottom",
        viewFactor: 0.2,
        interval: 150,
      })
      SR.reveal(
        ".feature-extended:nth-child(odd) .feature-extended-body, .feature-extended:nth-child(even) .feature-extended-image",
        {
          duration: 600,
          distance: "40px",
          easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          origin: "right",
          viewFactor: 0.5,
        }
      )
      SR.reveal(
        ".feature-extended:nth-child(even) .feature-extended-body, .feature-extended:nth-child(odd) .feature-extended-image",
        {
          duration: 600,
          distance: "40px",
          easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          origin: "left",
          viewFactor: 0.5,
        }
      )
      SR.reveal(".pricing-table, .testimonial, .cta-inner", {
        duration: 600,
        distance: "60px",
        easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        origin: "bottom",
        viewFactor: 0.5,
        interval: 150,
      })
    }
  }

  handleChange(event) {
    this.setState({
      packageType: event.target.value,
      value: event.target.value
    })
  }
  render() {
    
    return (
      <>
        <div className="body-wrap boxed-container">
          <header className="site-header text-light">
            <div className="container">
              <div className="site-header-inner">
                <div className="brand header-brand">
                  <h1 className="m-0">
                    <a href="/#">
                      <img
                        className="header-logo-image"
                        src={themeImages.themeLogo}
                        alt="Logo"
                      />
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </header>
          <main>
            <section className="hero text-center text-light">
              <div className="container-sm">
                <div className="hero-inner">
                  <div className="hero-copy">
                    <h1 className="hero-title mt-0">
                      Contact
                    </h1>
                    <p className="hero-paragraph">
                      Tell me about yourself, your business, your project, and 
                      I'll get back to you very soon to discuss some options.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="cta contact section text-light">
              <div className="container">
                <div className="cta-inner section-inner is-revealing">
                  <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                      <input placeholder="Name" type="text" name="name" />
                      <select 
                        name="package-type" 
                        className={!this.state.value ? "placeholder" : null}
                        value={this.state.packageType}
                        onChange={(e) => this.handleChange(e)}
                        >                        
                        <option value="" disabled>Package Type</option>
                        <option value="basic">Basic</option>
                        <option value="business">Business</option>
                        <option value="custom">Custom</option>
                      </select>
                    </p>
                    <p>
                      {/* <label>Your Name:  */}
                        {/* </label>    */}
                        <input placeholder="Phone Number" type="text" name="phone" />

                      {/* <label>Your Email:  */}
                        <input placeholder="Email" type="email" name="email" />
                        {/* </label> */}
                    </p>
                    <p>
                      {/* <label>Message:  */}
                        <textarea placeholder="Message" name="message"></textarea>
                        {/* </label> */}
                    </p>
                    <p>
                      <button className="button button-secondary button-wide-mobile" type="submit">Submit</button>
                    </p>
                  </form>
                </div>
              </div>
            </section>
          </main>
          <footer className="site-footer">
            <div className="container">
              <div className="site-footer-inner">
                <div className="site-footer-top">
                  <div className="site-footer-unit">
                    <div className="site-footer-unit-inner">
                      <div className="brand footer-brand mb-24">
                        <a href="/#">
                          <img src={themeImages.themeLogo} alt="Logo" />
                        </a>
                      </div>
                      <ul className="footer-social-links list-reset">
                        <li>
                          <a target="_blank" href="https://www.linkedin.com/in/danielleleblanccyr/">
                            <span className="screen-reader-text">LinkedIn</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="#FFF" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>                            </svg>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="https://twitter.com/danielle__lc">
                            <span className="screen-reader-text">Twitter</span>
                            <svg
                              width="16"
                              height="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                                fill="#FFF"
                              />
                            </svg>
                          </a>
                        </li>
                        {/* <li>
                          <a href="/#">
                            <span className="screen-reader-text">Google</span>
                            <svg
                              width="16"
                              height="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                                fill="#FFF"
                              />
                            </svg>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    )
  }
}

export default ContactPage
