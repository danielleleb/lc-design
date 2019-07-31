/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import SR from "./ScrollReveal"
import "../scss/style.scss"

import themeLogo from "../images/logo.svg"
import themeStars from "../images/5-stars.svg"

import themeFeature01 from "../images/feature-01.svg"
import themeFeature02 from "../images/feature-02.svg"
import themeFeature03 from "../images/feature-03.svg"
import themeFeature04 from "../images/feature-04.svg"
import designImg from "../images/undraw_pair_programming_njlp.svg"
import decideImg from "../images/undraw_decide_3iwx.svg"
import mobileImg from "../images/undraw_mobile_images_rc0q.svg"
import supportImg from "../images/undraw_video_influencer_9oyy.svg"
import landingImg from "../images/undraw_slider_5bgj.svg"

import themeFeatureExtended01 from "../images/feature-extended-01.svg"
import themeFeatureExtended02 from "../images/feature-extended-02.svg"
import themeFeatureExtended03 from "../images/feature-extended-03.svg"

import themeFeaturesQuotaIllustration from "../images/features-quote-illustration.svg"
import themeFeaturesIllustration from "../images/features-illustration.svg"

import themeTestimonial01 from "../images/testimonial-01.png"
import themeTestimonial02 from "../images/testimonial-02.png"
import themeTestimonial03 from "../images/testimonial-03.png"

const themeImages = {
  themeLogo,
  themeStars,

  themeFeature01,
  themeFeature02,
  themeFeature03,
  themeFeature04,
  designImg,
  decideImg,
  mobileImg,
  supportImg,
  landingImg,

  themeFeatureExtended01,
  themeFeatureExtended02,
  themeFeatureExtended03,

  themeFeaturesIllustration,
  themeFeaturesQuotaIllustration,

  themeTestimonial01,
  themeTestimonial02,
  themeTestimonial03,
}

class Layout extends React.Component {
  componentDidMount() {
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
                      Improve your web presence 
                    </h1>
                    <p className="hero-paragraph">
                      Bring your business to life online. 
                      From designing and developing, to domains and hosting, and everything in between.
                    </p>
                    <div className="hero-cta">
                      <a
                        className="button button-primary button-wide-mobile"
                        href="/contact"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="features section">
              <div className="container">
                <div className="features-inner section-inner has-bottom-divider">
                  <div className="features-header text-center">
                    <div className="container-sm">
                      <h2 className="section-title mt-0 is-revealing">
                        I specialize in designing and producing modern, 
                        customized digital solutions. 
                        {/* Avoiding the slow, clunky and outdated - 
                        I opt for creating fast, personalized, and mobile interactions. */}
                      </h2>
                      <img
                        className="features-illustration is-revealing"
                        src={themeImages.landingImg}
                        alt="Features illustration"
                      />
                    </div>
                  </div>
                  <div className="features-wrap">
                    <div className="feature text-center is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon mb-16">
                          <img
                            src={themeImages.themeFeature01}
                            alt="Feature 01"
                          />
                        </div>
                        <div className="feature-content">
                          <h4 className="feature-title mt-0 mb-8">Design</h4>
                          <p className="text-sm mb-0">
                            A clean, appealing design is what draws your users in. 
                            The importance of a modern, sleek user interface (including in mobile!) cannot be over-emphasized.  
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="feature text-center is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon mb-16">
                          <img
                            src={themeImages.themeFeature02}
                            alt="Feature 02"
                          />
                        </div>
                        <div className="feature-content">
                          <h4 className="feature-title mt-0 mb-8">Development</h4>
                          <p className="text-sm mb-0">
                            Intuitive user interactions and an easy-to-use interface will keep your audience coming back for more. 
                            No lagging, no waiting, just your content and your users.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="features-wrap">
                    <div className="feature text-center is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon mb-16">
                          <img
                            src={themeImages.themeFeature03}
                            alt="Feature 03"
                          />
                        </div>
                        <div className="feature-content">
                          <h4 className="feature-title mt-0 mb-8">Hosting</h4>
                          <p className="text-sm mb-0">
                            Not all hosting is the same. I can help you to learn about your options,
                            and to find what best suits your needs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="feature text-center is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon mb-16">
                          <img
                            src={themeImages.themeFeature04}
                            alt="Feature 04"
                          />
                        </div>
                        <div className="feature-content">
                          <h4 className="feature-title mt-0 mb-8">Domain</h4>
                          <p className="text-sm mb-0">
                            A good domain your users will never forget. I can help you with purchasing a domain, 
                            and configuring it to your website. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="features-extended section">
              <div className="features-extended-inner section-inner">
                <div className="features-extended-header text-center">
                  <div className="container-sm">
                    <h2 className="section-title mt-0">
                      Set your website apart
                    </h2>
                    <p className="section-paragraph">
                      Empower your brand through meaningful user interactions. Display your content in the 
                      most eye-catching way. Keep your users coming back for more.
                    </p>
                  </div>
                </div>
                <div className="features-extended-wrap">
                  <div className="container">
                    <div className="feature-extended">
                      <div className="feature-extended-image is-revealing">
                        <img
                          src={themeImages.decideImg}
                          alt="Feature extended 01"
                        />
                      </div>
                      <div className="feature-extended-body is-revealing">
                        <h3 className="mt-0">Design and development</h3>
                        <p className="mb-0">
                          Starting from scratch? Or maybe your current website is stuck in 2004?
                          Tell me about your business, your audience and your vision, and I'll bring it all together.
                        </p>
                      </div>
                    </div>
                    <div className="feature-extended">
                      <div className="feature-extended-image is-revealing">
                        <img
                          src={themeImages.mobileImg}
                          alt="Feature extended 02"
                        />
                      </div>
                      <div className="feature-extended-body is-revealing">
                        <h3 className="mt-0">Additional features</h3>
                        <p className="mb-0">
                          Got a website that's lacking features? I'll work with your existing codebase to 
                          add new functionalities, or fix existing bugs.
                        </p>
                      </div>
                    </div>
                    <div className="feature-extended">
                      <div className="feature-extended-image is-revealing">
                        <img
                          src={themeImages.supportImg}
                          alt="Feature extended 03"
                        />
                      </div>
                      <div className="feature-extended-body is-revealing">
                        <h3 className="mt-0">Support</h3>
                        <p className="mb-0">
                          I won't just create a website for you, I'll provide the support 
                          and instructions that will allow you to make use of it to the fullest.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="pricing section text-light">
              <div className="container">
                <div className="pricing-inner section-inner">
                  <h2 className="section-title mt-0 text-center">
                    Packages to suit your needs
                  </h2>
                  <div className="pricing-tables-wrap">
                    <div className="pricing-table is-revealing">
                      <div className="pricing-table-inner">
                        <div className="pricing-table-main">
                          <div className="pricing-table-header mb-24 pb-24">
                            <div className="pricing-table-title text-sm mt-0 mb-12">
                              <br/>
                            </div>
                            <div className="pricing-table-price">
                              {/* <span className="pricing-table-price-currency">
                                $
                              </span> */}
                              <span className="pricing-table-price-amount h1">
                                Basic
                              </span>
                              {/* /m */}
                            </div>
                          </div>
                          <div className="pricing-table-features-title text-xs mb-24">
                            Top features
                          </div>
                          <ul className="pricing-table-features list-reset text-xs">
                            <li>
                              <span>Perfect for displaying a portfolio</span>
                            </li>
                            <li>
                              <span>Blogging set up plus three pages</span>
                            </li>
                            <li>
                              <span>Optional contact form</span>
                            </li>
                            <li>
                              <span>Intro session and CMS support</span>
                            </li>
                          </ul>
                        </div>
                        <div className="pricing-table-cta">
                          <a
                            className="button button-primary button-block"
                            href="/contact"
                          >
                            Inquire now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-table is-revealing">
                      <div className="pricing-table-inner">
                        <div className="pricing-table-main">
                          <div className="pricing-table-header mb-24 pb-24">
                            <div className="pricing-table-title text-sm mt-0 mb-12">
                              <br/>
                            </div>
                            <div className="pricing-table-price">
                              <span className="pricing-table-price-currency">
                                {/* $ */}
                              </span>
                              <span className="pricing-table-price-amount h1">
                                Business
                              </span>
                              {/* /m */}
                            </div>
                          </div>
                          <div className="pricing-table-features-title text-xs mb-24">
                            Top features
                          </div>
                          <ul className="pricing-table-features list-reset text-xs">
                            <li>
                              <span>Five to eight content pages</span>
                            </li>
                            <li>
                              <span>Multiple forms to suit your needs</span>
                            </li>
                            <li>
                              <span>Optional blog set up</span>
                            </li>
                            <li>
                              <span>Intro session and CMS support</span>
                            </li>
                          </ul>
                        </div>
                        <div className="pricing-table-cta">
                          <a
                            className="button button-primary button-block"
                            href="/contact"
                          >
                            Inquire now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-table is-revealing">
                      <div className="pricing-table-inner">
                        <div className="pricing-table-main">
                          <div className="pricing-table-header mb-24 pb-24">
                            <div className="pricing-table-title text-sm mt-0 mb-12">
                              <br/>
                            </div>
                            <div className="pricing-table-price">
                              <span className="pricing-table-price-currency">
                                {/* $ */}
                              </span>
                              <span className="pricing-table-price-amount h1">
                                Custom
                              </span>
                              {/* /m */}
                            </div>
                          </div>
                          <div className="pricing-table-features-title text-xs mb-24">
                            Top features
                          </div>
                          <ul className="pricing-table-features list-reset text-xs">
                            <li>
                              <span>Large business website or application</span>
                            </li>
                            <li>
                              <span>External API integration</span>
                            </li>
                            <li>
                              <span>Existing bug fixes</span>
                            </li>
                            <li>
                              <span>Additional support and tutorials</span>
                            </li>
                          </ul>
                        </div>
                        <div className="pricing-table-cta">
                          <a
                            className="button button-primary button-block"
                            href="/contact"
                          >
                            Inquire now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="testimonials section">
              <div className="container">
                <div className="testimonials-inner section-inner">
                  <h2 className="section-title mt-0 text-center">
                    Upgrade your online presence with help from Danielle Leblanc-Cyr
                  </h2>
                  {/* <div className="testimonials-wrap">
                    <div className="testimonial is-revealing">
                      <div className="testimonial-inner">
                        <div className="testimonial-main mb-32">
                          <div className="testimonial-rating mb-24">
                            <img src={themeImages.themeStars} alt="Rating" />
                          </div>
                          <div className="testimonial-body">
                            <p className="text-sm m-0">
                              Lorem ipsum is placeholder text commonly used in
                              the graphic, print, and publishing industries for
                              previewing layouts and visual mockups.
                            </p>
                          </div>
                        </div>
                        <div className="testimonial-footer">
                          <div className="testimonial-image">
                            <img
                              src={themeImages.themeTestimonial01}
                              alt="Mark Walker"
                            />
                          </div>
                          <div className="testimonial-name text-sm">
                            Mark Walker
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial is-revealing">
                      <div className="testimonial-inner">
                        <div className="testimonial-main mb-32">
                          <div className="testimonial-rating mb-24">
                            <img src={themeImages.themeStars} alt="Rating" />
                          </div>
                          <div className="testimonial-body">
                            <p className="text-sm m-0">
                              Lorem ipsum is placeholder text commonly used in
                              the graphic, print, and publishing industries for
                              previewing layouts and visual mockups.
                            </p>
                          </div>
                        </div>
                        <div className="testimonial-footer">
                          <div className="testimonial-image">
                            <img
                              src={themeImages.themeTestimonial02}
                              alt="Marta Smirth"
                            />
                          </div>
                          <div className="testimonial-name text-sm">
                            Marta Smirth
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial is-revealing">
                      <div className="testimonial-inner">
                        <div className="testimonial-main mb-32">
                          <div className="testimonial-rating mb-24">
                            <img src={themeImages.themeStars} alt="Rating" />
                          </div>
                          <div className="testimonial-body">
                            <p className="text-sm m-0">
                              Lorem ipsum is placeholder text commonly used in
                              the graphic, print, and publishing industries for
                              previewing layouts and visual mockups.
                            </p>
                          </div>
                        </div>
                        <div className="testimonial-footer">
                          <div className="testimonial-image">
                            <img
                              src={themeImages.themeTestimonial03}
                              alt="Evan Hill"
                            />
                          </div>
                          <div className="testimonial-name text-sm">
                            Evan Hill
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </section>
            <section className="cta section text-light">
              <div className="container">
                <div className="cta-inner section-inner is-revealing">
                  <h3 className="section-title mt-0">
                    Fast, personalized, mobile.
                  </h3>
                  <div className="cta-cta">
                    <a className="button button-wide-mobile" href="/contact">
                      Get started
                    </a>
                  </div>
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
                  {/* <div className="site-footer-unit">
                    <div className="site-footer-unit-inner">
                      <div className="footer-top-links">
                        <div className="footer-title mb-16">Company</div>
                        <ul className="list-reset">
                          <li>
                            <a href="/#">Dummy text used</a>
                          </li>
                          <li>
                            <a href="/#">The purpose of lorem</a>
                          </li>
                          <li>
                            <a href="/#">Filler text can be very useful</a>
                          </li>
                          <li>
                            <a href="/#">Be on design</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="site-footer-unit">
                    <div className="site-footer-unit-inner">
                      <div className="footer-top-links">
                        <div className="footer-title mb-16">Use cases</div>
                        <ul className="list-reset">
                          <li>
                            <a href="/#">Consectetur adipiscing</a>
                          </li>
                          <li>
                            <a href="/#">Lorem Ipsum is place</a>
                          </li>
                          <li>
                            <a href="/#">Excepteur sint</a>
                          </li>
                          <li>
                            <a href="/#">Occaecat cupidatat</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="site-footer-unit">
                    <div className="site-footer-unit-inner">
                      <div className="footer-top-links">
                        <div className="footer-title mb-16">Docs</div>
                        <ul className="list-reset">
                          <li>
                            <a href="/#">The purpose of lorem</a>
                          </li>
                          <li>
                            <a href="/#">Dummy text used</a>
                          </li>
                          <li>
                            <a href="/#">Excepteur sint</a>
                          </li>
                          <li>
                            <a href="/#">Occaecat cupidatat</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* <div className="site-footer-bottom">
                  <ul className="footer-bottom-links list-reset">
                    <li>
                      <a href="/#">Contact</a>
                    </li>
                    <li>
                      <a href="/#">FAQ's</a>
                    </li>
                    <li>
                      <a href="/#">Terms</a>
                    </li>
                  </ul>
                  <div className="footer-copyright">
                    &copy; 2018 Ruby, all rights reserved
                  </div>
                </div> */}
              </div>
            </div>
          </footer>
        </div>
      </>
    )
  }
}

export default Layout
