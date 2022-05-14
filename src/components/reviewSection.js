import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { StaticImage } from "gatsby-plugin-image"
import SectionLayout from "./sectionLayout"
import "./reviewSection.css"

// import required modules
import { EffectCoverflow, Pagination } from "swiper"

export default function reviewSection() {
  return (
    <SectionLayout background={true}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={false}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonialBox">
            <StaticImage
              className="quote"
              src="../images/right-quote.png"
              loading="eager"
              // width={1000}
              height={60}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <div className="content">
              <p>
                'Quite good massage. recommend owner to change bed please as
                it's very hard and pressing hard on the face.'
              </p>
              <div className="details">
                {/* <div> */}
                <StaticImage
                  //   className="imgBox"
                  src="../images/avatarIcon.png"
                  loading="eager"
                  height={56}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
                {/* </div> */}
                <h3>
                  name name <br/>
                  <span>review from Facebook</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <StaticImage
              className="quote"
              src="../images/right-quote.png"
              loading="eager"
              // width={1000}
              height={60}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <div className="content">
              <p>
                'Quite good massage. recommend owner to change bed please as
                it's very hard and pressing hard on the face.'
              </p>
              <div className="details">
                {/* <div> */}
                <StaticImage
                  //   className="imgBox"
                  src="../images/avatarIcon.png"
                  loading="eager"
                  height={56}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
                {/* </div> */}
                <h3>
                  name name <br/>
                  <span>review from Facebook</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <StaticImage
              className="quote"
              src="../images/right-quote.png"
              loading="eager"
              // width={1000}
              height={60}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <div className="content">
              <p>
                'Quite good massage. recommend owner to change bed please as
                it's very hard and pressing hard on the face.'
              </p>
              <div className="details">
                {/* <div> */}
                <StaticImage
                  //   className="imgBox"
                  src="../images/avatarIcon.png"
                  loading="eager"
                  height={56}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
                {/* </div> */}
                <h3>
                  name name <br/>
                  <span>review from Facebook</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <StaticImage
              className="quote"
              src="../images/right-quote.png"
              loading="eager"
              // width={1000}
              height={60}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <div className="content">
              <p>
                'Quite good massage. recommend owner to change bed please as
                it's very hard and pressing hard on the face.'
              </p>
              <div className="details">
                {/* <div> */}
                <StaticImage
                  //   className="imgBox"
                  src="../images/avatarIcon.png"
                  loading="eager"
                  height={56}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
                {/* </div> */}
                <h3>
                  name name <br/>
                  <span>review from Facebook</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <StaticImage
              className="quote"
              src="../images/right-quote.png"
              loading="eager"
              // width={1000}
              height={60}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <div className="content">
              <p>
                'Quite good massage. recommend owner to change bed please as
                it's very hard and pressing hard on the face.'
              </p>
              <div className="details">
                {/* <div> */}
                <StaticImage
                  //   className="imgBox"
                  src="../images/avatarIcon.png"
                  loading="eager"
                  height={56}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
                {/* </div> */}
                <h3>
                  name name <br/>
                  <span>review from Facebook</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </SectionLayout>
  )
}
