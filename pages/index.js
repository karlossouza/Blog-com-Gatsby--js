import * as React from "react"
import{Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () =>(

  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
       <ul>
      <li>
        <a href="/Sobre">Sobre</a>
      </li>
      <li>
        <Link to="/Sobre">Sobre</Link>
      </li>
     </ul>
  </Layout>

)

export default IndexPage
