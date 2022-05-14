import React, { Component , useState} from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SectionLayout from "../components/sectionLayout"
import "./locationSection.css"
import { StaticImage } from "gatsby-plugin-image"
import { Card, Row, Col, Button } from "react-bootstrap"

const CardData = [
  {
    title: "Bedok Reservoir",
    address: "740 Bedok Reservoir Road #01-3183",
    level: "01-3183",
    postalCode: "Singapore, 470740",
    openingHours: "10AM to 1130PM",
    tele: "6702 0623",
  },
  {
    title: "West Coast",
    address: "501 West Coast Drive #01-268",
    level: "01-268",
    postalCode: "Singapore, 120501",
    openingHours: "10AM to 1130PM",
    tele: "6969 5153",
  },
  {
    title: "Sunset Way",
    address: "105 Clementi Street 12",
    level: "???",
    postalCode: "Singapore, 120105",
    openingHours: "10AM to 1130PM",
    tele: "6962 7246",
  },
]

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <SectionLayout>
        <div style={{ backgroundColor: "red" }}>
          <h2> Single Item</h2>
          <Slider {...settings} style={{ maxWidth: `1200px` }}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>

        <div style={{ marginTop: "120px" }}>
          <Row xs={1} md={3} className="g-4">
            {Array.from(CardData).map((cardInfo, idx) => (
              <Col>
                {/* <Card style={{ border: "none" }}> */}
                <Card idx={idx}>
                  <StaticImage
                    src="../images/introSectionPhoto.jpg"
                    loading="eager"
                    // width={1000}
                    // height={1400}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    class="imgRadius"
                  />
                  <Card.Body>
                    <Card.Title>{cardInfo.title}</Card.Title>
                    <Card.Text>{cardInfo.address}</Card.Text>
                    {/* <Card.Text>{cardInfo.level}</Card.Text> */}
                    <Card.Text>{cardInfo.postalCode}</Card.Text>
                    <Card.Text>{cardInfo.openingHours}</Card.Text>
                    <Card.Text>{cardInfo.tele}</Card.Text>
                    <Button
                      variant="outline-dark"
                      style={{
                        marginTop: "8px",
                        padding: "8px 20px",
                        borderRadius: "32px",
                      }}
                    >
                      Find out more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </SectionLayout>
    )
  }
}
