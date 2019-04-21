import React from "react"
import SEO from "../components/seo"

export default ({ children }) =>
  <main>
    <SEO title="Home" keywords={[`Justin Gottshall`, `Personal Website`, `Software Engineer`, `Full-Stack`, `Developer`, `Cleveland`]} />
    {children}
  </main>
