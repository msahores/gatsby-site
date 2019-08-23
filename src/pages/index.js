import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Blog</h1>
    <p>Holi</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/contact/">Contact</Link>
    <Link to="/about/">About</Link>
    <Link to="/my-first-post/">Post</Link>
  </Layout>
)

export default IndexPage
