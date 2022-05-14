import * as React from "react"
import Seo from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import LandingSection from "../components/landingSection"
import IntroSection from '../components/introSection'
import AboutUsSection from '../components/aboutUsSection'
import LocationSection from "../components/locationSection"
import ReviewSection from "../components/reviewSection"

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Home" />
      <LandingSection />
      <IntroSection />
      <AboutUsSection />
      <LocationSection />
      <ReviewSection />
    </Layout>
  </>
)

export default IndexPage
