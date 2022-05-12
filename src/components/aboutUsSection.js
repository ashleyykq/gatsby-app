import * as React from "react"
import { Col, Row, CardGroup, Card } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import SectionLayout from "./sectionLayout"

const CardData = [
  {
    title: "Our Story",
    content:
      "Started out as a small massage centre in providing affordable massage. Where customer frequent to get their aches and tensions solved",
  },
  {
    title: "Our Service",
    content:
      "After a long day of work. Come down for a massage therapy sessionwhere our dedicated Massage Therapists use traditional accupressure massage techniques to release your muscle aches and knots",
  },
  {
    title: "Our Focus",
    content: "Providing a massage that reduce your muscle tensions",
  },
]
const aboutUsSection = () => {
  return (
    <SectionLayout background={true}>
      <Card.Title style={{ textAlign: "center", paddingBottom: "16px" }}>
        About Us
      </Card.Title>
      <Row xs={1} md={3} className="g-4">
        {Array.from(CardData).map((cardInfo, idx) => (
          <Col>
            <Card
              index={idx}
              style={{
                minHeight: `240px`,
                textAlign: "center",
                padding: `12px`,
              }}
            >
              <Card.Body>
                <Card.Title>{cardInfo.title}</Card.Title>
                <Card.Text>{cardInfo.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </SectionLayout>
  )
}

export default aboutUsSection
