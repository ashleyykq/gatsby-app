import * as React from "react"
import { Col, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import SectionLayout from "../components/sectionLayout"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./landingSection.css"
import { Button } from "../components/Button"

const settings = {
  dots: false,
  infinite: true,
  fade: true,
  autoplay: true,
  speed: 6000,
}

const introSection = () => {
  return (
    <SectionLayout landing={true} style={{backgroundColor: ''}}>
      <Row className="landing-section-row" style={{backgroundColor: ''}}>
        <Col className="vertical-col" style={{backgroundColor: ''}}>
          <p className="header">
            Massage is not just luxury but it is{" "}
            <span className="color-header">vital for good health</span>
          </p>
          <p className="subheader landing-subheader">
            Book an appointment with us now and allow massage to reduce your
            stress level, lower blood pressure and relax
          </p>
          <br />
          {/* <Button className="button">Book a Slot</Button> */}
          {/* <div>testing 1</div>
          <Button buttonSize="btn--medium" buttonStyle='btn--primary' buttonColor="primary">testing testing</Button>
          <div>testing 2</div> */}
        </Col>
        <Col className='landing-col-slider' style={{backgroundColor: ''}}>
          <Slider {...settings} className="overflow-hidden">
            <StaticImage
              src="../images/landingPhoto1.png"
              loading="eager"
              height={1400}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/landingPhoto2.png"
              loading="eager"
              height={1400}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/landingPhoto3.png"
              loading="eager"
              height={1400}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </Slider>
        </Col>
      </Row>
    </SectionLayout>
  )
}

export default introSection
