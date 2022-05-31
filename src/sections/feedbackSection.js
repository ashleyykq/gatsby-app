import * as React from "react"
import { Col, Row, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import SectionLayout from "../components/sectionLayout"
import { StaticImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./landingSection.css"

const feedbackSection = () => {
  return (
    <SectionLayout landing={false}>
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <StaticImage
            src="../images/feedback.jpg"
            loading="eager"
            height={360}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </Col>
        <Col xs={12} md={6} className="vertical-col landing-section-row">
          <div className="subheader">Name:</div>
          <br />
          <div className="subheader">Phone Number:</div>
          <br />
          <div className="subheader">Email:</div>
          <br />
          <div className="subheader">Feedback:</div>
          <br />
          {/* <Button className="button">Send Feedback</Button> */}
          <br />
          <div className="subheader">
            Your Valuable feedback is important to us to increase our standard
            of service. Thank you!
          </div>
        </Col>
      </Row>
    </SectionLayout>
  )
}

export default feedbackSection
