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
        <Col style={{ maxWidth: "50%" }}>
          <StaticImage
            src="../images/feedback.jpg"
            loading="eager"
            height={360}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </Col>
        <Col style={{ paddingLeft: "40px" }}>
          <span className="subheader">Name:</span>
          <br />
          <span className="subheader">Phone Number:</span>
          <br />
          <span className="subheader">Email:</span>
          <br />
          <span className="subheader">Feedback:</span>
          <br />
          <Button className="button">Send Feedback</Button>
          <br />
          <span className="subheader">Your Valuable feedback is important to us to increase our standard of service. Thank you!</span>
        </Col>
      </Row>
    </SectionLayout>
  )
}

export default feedbackSection
