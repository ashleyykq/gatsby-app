import React, { useState } from "react"
import SectionLayout from "../components/sectionLayout"
import "./servicesSection.css"
import { Card, Row, Col } from "react-bootstrap"

const CardData = [
  {
    title: "Foot Relexology",
    subtitle: "xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    title: "Shoulder Massage",
    subtitle: "xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    title: "Neagtive Ion Detox",
    subtitle: "xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    title: "Foot, Neck and Shoulder Massage",
    subtitle: "xxxxxxxxxxxxxxxxxxxxx",
  },
]

export default function LocationSection() {
  return (
    <SectionLayout landing={false}>
      <div>
        <Row xs={1} md={4} className="g-4">
          {Array.from(CardData).map((cardInfo, idx) => (
            <Col>
              <Card key={idx} className='service-card'>
                <Card.Body className='service-card-body'>
                  <Card.Title className='service-card-title'>{cardInfo.title}</Card.Title>
                  <Card.Text className='service-card-text'>{cardInfo.subtitle}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </SectionLayout>
  )
}
