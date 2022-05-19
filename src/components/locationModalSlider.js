import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { StaticImage } from "gatsby-plugin-image"
import "./locationModalSlider.css"

export default function SimpleSlider({ idx }) {
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
      {idx === 0 ? ( //BEDOK OUTLET
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
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/bedokOutlet/bedokLv2Female.png"
              loading="eager"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/bedokOutlet/bedokBed.png"
              loading="eager"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/bedokOutlet/bedokBed2.png"
              loading="eager"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </Slider>
        </div>
      ) : idx === 1 ? ( //WEST COAST OUTLET
        <div
          style={{
            textAlign: "center",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Slider {...settings}>
            <StaticImage
              src="../images/westCoastOutlet/westCoastStoreFront.png"
              loading="eager"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/westCoastOutlet/westCoastBed.png"
              loading="eager"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/westCoastOutlet/westCoastChairs.png"
              loading="eager"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </Slider>
        </div>
      ) : (
        //SUNSET WAY OUTLET
        <div
          style={{
            textAlign: "center",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Slider {...settings}>
            <StaticImage
              src="../images/sunsetwayOutlet/sunsetwayStoreFront.png"
              loading="eager"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/sunsetwayOutlet/sunsetwayChairs.png"
              loading="eager"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/sunsetwayOutlet/sunsetwayChairs2.png"
              loading="eager"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </Slider>
        </div>
      )}
    </div>
  )
}
