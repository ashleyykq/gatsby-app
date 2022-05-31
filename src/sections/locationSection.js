import React, { useState } from "react"
import SectionLayout from "../components/sectionLayout"
import "./locationSection.css"
import { StaticImage } from "gatsby-plugin-image"
import { Card, Row, Col, Button } from "react-bootstrap"
import LocationModal from "../components/locationModal"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CardData = [
  {
    title: "Bedok Reservoir",
    address: "740 Bedok Reservoir Road #01-3183",
    postalCode: "Singapore, 470740",
    openingHours: "10AM to 1130PM",
    tele: "6702 0623",
    popUpContent: "test1",
    images: "../images/bedokOutlet/bedokStoreFront.png",
  },
  {
    title: "West Coast",
    address: "501 West Coast Drive #01-268",
    postalCode: "Singapore, 120501",
    openingHours: "10AM to 1130PM",
    tele: "6969 5153",
    popUpContent: "test2",
    images: "../images/bedokOutlet/bedokStoreFront.png",
  },
  {
    title: "Sunset Way",
    address: "105 Clementi Street 12",
    postalCode: "Singapore, 120105",
    openingHours: "10AM to 1130PM",
    tele: "6962 7246",
    popUpContent: "test3",
    images: "../images/bedokOutlet/bedokStoreFront.png",
  },
]

export default function LocationSection() {
  const [modalShow, setModalShow] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  return (
    <SectionLayout landing={false}>
      <div className="location-section-row">
        <Row xs={1} md={3} className="g-4">
          {Array.from(CardData).map((cardInfo, idx) => (
            <Col>
              <Card key={idx} className="location-card">
                {idx === 0 ? (
                  <StaticImage
                    src="../images/bedokOutlet/bedokStoreFront.png"
                    loading="eager"
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="imgRadius"
                  />
                ) : idx === 1 ? (
                  <StaticImage
                    src="../images/westCoastOutlet/westCoastStoreFront.png"
                    loading="eager"
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="imgRadius"
                  />
                ) : (
                  <StaticImage
                    src="../images/sunsetwayOutlet/sunsetwayStoreFront.png"
                    loading="eager"
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    className="imgRadius"
                  />
                )}

                <Card.Body>
                  <Card.Title>{cardInfo.title}</Card.Title>
                  <Card.Text>{cardInfo.address}</Card.Text>
                  <Card.Text>{cardInfo.postalCode}</Card.Text>
                  <Card.Text>{cardInfo.openingHours}</Card.Text>
                  <Card.Text>{cardInfo.tele}</Card.Text>
                  <Button
                    className="button"
                    style={{
                      marginTop: "8px",
                      padding: "8px 20px",
                      borderRadius: "32px",
                      marginRight: "8px",
                    }}
                    onClick={() => {
                      setModalShow(true)
                      setModalIndex(idx)
                    }}
                  >
                    Book Now
                  </Button>
                  <Button
                    className="button-outline"
                    style={{
                      marginTop: "8px",
                      padding: "8px 20px",
                      borderRadius: "32px",
                    }}
                    onClick={() => {
                      setModalShow(true)
                      setModalIndex(idx)
                    }}
                  >
                    Find Out More
                  </Button>
                  <LocationModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    modalindex={modalIndex}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </SectionLayout>
  )
}
