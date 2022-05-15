import React, { useState } from "react"
import SectionLayout from "../components/sectionLayout"
import "./locationSection.css"
import { StaticImage } from "gatsby-plugin-image"
import { Card, Row, Col, Button } from "react-bootstrap"
import LocationModal from "./locationModal"

const CardData = [
  {
    title: "Bedok Reservoir",
    address: "740 Bedok Reservoir Road #01-3183",
    postalCode: "Singapore, 470740",
    openingHours: "10AM to 1130PM",
    tele: "6702 0623",
    popUpContent: "test1",
  },
  {
    title: "West Coast",
    address: "501 West Coast Drive #01-268",
    postalCode: "Singapore, 120501",
    openingHours: "10AM to 1130PM",
    tele: "6969 5153",
    popUpContent: "test2",
  },
  {
    title: "Sunset Way",
    address: "105 Clementi Street 12",
    postalCode: "Singapore, 120105",
    openingHours: "10AM to 1130PM",
    tele: "6962 7246",
    popUpContent: "test3",
  },
]

export default function LocationSection() {
  const [modalShow, setModalShow] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  return (
    <SectionLayout>
      <div style={{ marginTop: "120px" }}>
        <Row xs={1} md={3} className="g-4">
          {Array.from(CardData).map((cardInfo, idx) => (
            <Col>
              <Card key={idx}>
                <StaticImage
                  src="../images/introSectionPhoto.jpg"
                  loading="eager"
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                  className="imgRadius"
                />
                <Card.Body>
                  <Card.Title>{cardInfo.title}</Card.Title>
                  <Card.Text>{cardInfo.address}</Card.Text>
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
                    onClick={() => {
                      setModalShow(true)
                      setModalIndex(idx)
                    }}
                  >
                    Find out more
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
