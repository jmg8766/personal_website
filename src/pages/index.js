import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import LinkedIn from "../images/linkedin-square.svg"
import GitHub from "../images/github-square.svg"
import Email from "../images/email.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="centered">
      <h1>Justin Gottshall</h1>
      <p>
        Freelance Full-Stack Developer
        <a href="https://www.linkedin.com/in/justin-gottshall-25606b107" target="_blank">
          <img src={LinkedIn} width="27.033px" height="27.033px" alt="LinkedIn icon"/>
        </a>
        <a href="https://github.com/jmg8766" target="_blank">
          <img src={GitHub} width="27.033px" height="27.033px" alt="GitHub icon"/>
        </a>
        <a href="mailto:justin.gottshall@gmail.com">
          <img src={Email} width="27.033px" height="27.033px" alt="email icon"/>
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
