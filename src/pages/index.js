import * as React from "react"
import Seo from "../sections/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import LandingSection from "../sections/landingSection"
import ServicesSection from '../sections/servicesSection'
import LocationSection from "../sections/locationSection"
import ReviewSection from "../sections/reviewSection"
import FeedbackSection from "../sections/feedbackSection"

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Home" />
      <LandingSection />
      <ServicesSection />
      <LocationSection />
      <ReviewSection />
      <FeedbackSection />
    </Layout>
  </>
)

export default IndexPage
