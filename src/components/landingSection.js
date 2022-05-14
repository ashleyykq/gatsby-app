// import * as React from "react"
// import { Col, Row } from "react-bootstrap"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/css/bootstrap.min.css"
// import { StaticImage } from "gatsby-plugin-image"

// const landingSection = () => {
//   return (
//     <>
//       <>
//         <Row>
//           <Col style={{ color: "black" }}>
//             <StaticImage
//               src="../images/landingSectionPhoto1.jpg"
//               loading="eager"
//               width={1200}
//               quality={95}
//               formats={["auto", "webp", "avif"]}
//               alt=""
//             />
//           </Col>
//           <Col>
//             {" "}
//             <StaticImage
//               src="../images/landingSectionPhoto2.jpg"
//               loading="eager"
//               width={1200}
//               quality={95}
//               formats={["auto", "webp", "avif"]}
//               alt=""
//             />
//           </Col>
//         </Row>
//       </>
//     </>
//   )
// }

// export default landingSection

import React from "react"
// import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
}

const landingSection = () => {
  return (
    <Slider {...settings} className="overflow-hidden">
      <StaticImage
        src="../images/introSectionPhoto.jpg"
        loading="eager"
        // width={1000}
        height={1400}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
      <StaticImage
        src="../images/landingSectionPhoto1.jpg"
        loading="eager"
        height={1400}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
      <StaticImage
        src="../images/landingSectionPhoto2.jpg"
        loading="eager"
        height={1400}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
    </Slider>
  )
}

export default landingSection
