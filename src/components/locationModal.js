import React from "react"
import { Modal, Button } from "react-bootstrap"
import LocationModalSlider from "./LocationModalSlider"
import { StaticImage } from "gatsby-plugin-image"

export default function LocationModal(props) {
  const locationData = [
    {
      title: "Bedok Reservoir",
    },
    {
      title: "West Coast",
    },
    {
      title: "Sunset Way",
    },
  ]
  return (
    <>
      {props.modalindex === 0 ? (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ textAlign: "center", paddingBottom: "8px" }}
            >
              {locationData[props.modalindex].title}
            </Modal.Title>
            <LocationModalSlider idx={props.modalindex} />
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ textAlign: "center", padding: "32px 0px 8px 0px" }}
            >
              Pricing
            </Modal.Title>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StaticImage
                style={{ margin: "0 auto" }}
                src="../images/bedokOutlet/bedokPricing2.png"
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      ) : props.modalindex === 1 ? (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ textAlign: "center", paddingBottom: "8px" }}
            >
              {locationData[props.modalindex].title}
            </Modal.Title>
            <LocationModalSlider idx={props.modalindex} />
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ textAlign: "center", padding: "32px 0px 8px 0px" }}
            >
              Pricing
            </Modal.Title>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StaticImage
                style={{ margin: "0 auto" }}
                src="../images/sunsetwayOutlet/sunsetwayPricing.png"
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ textAlign: "center", paddingBottom: "8px" }}
            >
              {locationData[props.modalindex].title}
            </Modal.Title>
            <LocationModalSlider idx={props.modalindex} />
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ textAlign: "center", padding: "32px 0px 8px 0px" }}
            >
              Pricing
            </Modal.Title>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StaticImage
                style={{ margin: "0 auto" }}
                src="../images/bedokOutlet/bedokPricing2.png"
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt=""
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  )
}
