import React from "react"
import { Modal, Button } from "react-bootstrap"
import LocationModalSlider from "./LocationModalSlider"
import { StaticImage } from "gatsby-plugin-image"

export default function LocationModal(props) {
  const locationData = [
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
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter">
          {locationData[props.modalindex].title}
        </Modal.Title>
        <LocationModalSlider />
        Pricing
        <StaticImage
          src="../images/bedokOutlet/bedokPricing.png"
          loading="eager"
          height={360}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
