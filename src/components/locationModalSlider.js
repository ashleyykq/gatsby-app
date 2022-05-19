import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { StaticImage } from "gatsby-plugin-image"
import "./locationModalSlider.css"

// const CardData = [
//   {
//     title: "Bedok Reservoir",
//     address: "740 Bedok Reservoir Road #01-3183",
//     level: "01-3183",
//     postalCode: "Singapore, 470740",
//     openingHours: "10AM to 1130PM",
//     tele: "6702 0623",
//   },
//   {
//     title: "West Coast",
//     address: "501 West Coast Drive #01-268",
//     level: "01-268",
//     postalCode: "Singapore, 120501",
//     openingHours: "10AM to 1130PM",
//     tele: "6969 5153",
//   },
//   {
//     title: "Sunset Way",
//     address: "105 Clementi Street 12",
//     level: "???",
//     postalCode: "Singapore, 120105",
//     openingHours: "10AM to 1130PM",
//     tele: "6962 7246",
//   },
// ]

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    }
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Slider {...settings}>
            <StaticImage
              src="../images/bedokOutlet/bedokStoreFront.png"
              loading="eager"
              quality={100}
              height={600}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/bedokOutlet/bedokLv2Female.png"
              loading="eager"
              quality={100}
              height={600}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/bedokOutlet/bedokBed.png"
              loading="eager"
              quality={100}
              height={600}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/bedokOutlet/bedokBed2.png"
              loading="eager"
              quality={100}
              height={600}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </Slider>
        </div>
      </div>
    )
  }
}
