/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const googleFonts = (
    <link
      key={"google-font"}
      href="https://fonts.googleapis.com/css?family=Heebo:400,700|Playfair+Display:700"
      rel="stylesheet"
    />
  )

  const scrollReveal = (
    <script
      key={"scroll-reveal"}
      src="https://unpkg.com/scrollreveal@4.0.5/dist/scrollreveal.min.js"
    ></script>
  )

  setHeadComponents(googleFonts)
  setPostBodyComponents(scrollReveal)
}
