import * as React from "react"
import { Col, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import SectionLayout from "../components/sectionLayout"

const introSection = () => {
  return (
    <SectionLayout background={false}>
      <Row>
        <Col style={{ color: "black" , fontSize: '24px' }}>
          Massage is not just luxury but it is vital for good health. Massage
          reduces stress level, lower blood pressure thus increasing better mood
        </Col>
      </Row>
    </SectionLayout>
  )
}

export default introSection
