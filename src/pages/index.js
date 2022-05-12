import * as React from "react"
import Layout from "../components/layout"
import LandingSection from "../components/landingSection"
import IntroSection from '../components/introSection'
import AboutUsSection from '../components/aboutUsSection'
import Seo from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Home" />
      <LandingSection />
      <IntroSection />
      <AboutUsSection />
    </Layout>
  </>
)

export default IndexPage
