import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Contacto</h1>
    <Link to="/">Home</Link>
    <Link to="/">About</Link>
  </Layout>
)

export default Contact
