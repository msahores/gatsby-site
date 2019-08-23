import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <main>
      <h1>About the Author</h1>
      <p>Welcome to my Gatsby site.</p>
      <Link to="/">Volver al home</Link>
    </main>
  </Layout>
)

export default AboutPage
