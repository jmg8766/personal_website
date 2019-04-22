import React from "react"
import SEO from "../components/seo"

export default ({ children }) =>
  <main>
    <SEO 
      title="Justin Gottshall | Full-Stack Developer" 
      description="Full-Stack Developer living in Cleveland, OH. Currently accepting new clients!" 
      keywords={[`Justin Gottshall`, `Personal Website`, `Software Engineer`, `Full-Stack`, `Developer`, `Cleveland`]} 
    />
    {children}
  </main>
