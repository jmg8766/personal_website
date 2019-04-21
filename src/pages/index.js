import React from "react"
import styles from "./index.module.css"
import Layout from "../components/layout"
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from "react-icons/fa"

export default () => (
  <Layout>
    <div className={styles.centered}>
      <h1>Justin Gottshall</h1>
      <p>Freelance Full-Stack Developer</p>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/justin-gottshall-25606b107" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/>
        </a>
        <a href="https://github.com/jmg8766" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare/>
        </a>
        <a href="mailto:justin.gottshall@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelopeSquare/>
        </a>
      </div>
    </div>
  </Layout>
)