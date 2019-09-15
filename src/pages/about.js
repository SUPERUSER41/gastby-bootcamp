import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita enim
        placeat deserunt itaque nemo eveniet? Ipsum, vero! Maiores magnam
        accusantium quasi minus odit eaque sint enim. Repellat, ex! Placeat
        ratione pariatur est excepturi voluptatum, adipisci voluptates iste qui
        inventore omnis.
      </p>
      <p>
        <Link to="/contact">Contact me.</Link> Want to work with me? Reach out.{" "}
      </p>
    </Layout>
  )
}
export default AboutPage
