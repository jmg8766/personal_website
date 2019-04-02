import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import LinkedIn from "../images/linkedin-square.svg"
import LinkedInHighlighted from "../images/linkedin-square-alizarin.svg"
import GitHub from "../images/github-square.svg"
import GitHubHighlighted from "../images/github-square-alizarin.svg"
import Email from "../images/email.svg"
import EmailHighlighted from "../images/email-alizarin.svg"

const IconLink = ({ link, image, hoverImage, alt }) =>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={image}
           width="27px"
           height="27px"
           alt={alt}
           onMouseOver={e => {
             e.currentTarget.src = hoverImage
             e.currentTarget.width = 32
             e.currentTarget.height = 32
           }}
           onMouseOut={e => {
             e.currentTarget.src = image
             e.currentTarget.width = 27
             e.currentTarget.height = 27
           }}
      />
    </a>

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Justin Gottshall`, `Personal Website`, `Software Engineer`, `Full-Stack`, `Developer`, `Cleveland`]} />
    <div className="centered">
      <h1>Justin Gottshall</h1>
      <p>Freelance Full-Stack Developer</p>
      <div>
        <IconLink link="https://www.linkedin.com/in/justin-gottshall-25606b107" image={LinkedIn} hoverImage={LinkedInHighlighted} alt="LinkedIn Icon"/>
        <IconLink link="https://github.com/jmg8766" image={GitHub} hoverImage={GitHubHighlighted} alt="Github Icon"/>
        <IconLink link="mailto:justin.gottshall@gmail.com" image={Email} hoverImage={EmailHighlighted} alt="Email Icon"/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
