import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { StaticImage } from "gatsby-plugin-image"
import SectionLayout from "../components/sectionLayout"
import "./reviewSection.css"
import { EffectCoverflow, Pagination } from "swiper"

export default function reviewSection() {
  return (
    <SectionLayout landing={false}>
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
          slideShadows: false,
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
              src="../images/rightQuote.png"
              loading="eager"
              height={60}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <div className="content">
              <p>
                Quite good massage. recommend owner to change bed please as it's
                very hard and pressing hard on the face.
              </p>
              <div className="details">
                <StaticImage
                  src="../images/avatarIcon.png"
                  loading="eager"
                  height={56}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
                <h3>
                  Keith Chu <br />
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
              src="../images/rightQuote.png"
              loading="eager"
              height={60}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <div className="content">
              <p>Clean and neat environment with awesome skills.</p>
              <div className="details">
                <StaticImage
                  src="../images/avatarIcon.png"
                  loading="eager"
                  height={56}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
                <h3>
                  Janelle Cheeeeyyyyw <br />
                  <span>review from Facebook</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="testimonialBox">
            <StaticImage
              className="quote"
              src="../images/rightQuote.png"
              loading="eager"
              height={60}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <div className="content">
              <p>
                'I got a shoulder massage here, very professional and quick in
                setting up appointments. Friendly staff and no over selling. The
                massage was hard (I had to tell her to soften it a bit but great
                for people who like strong pressure!) and very balanced. Will
                definitely go back for footmassage next.'
              </p>
              <div className="details">
                <StaticImage
                  src="../images/avatarIcon.png"
                  loading="eager"
                  height={56}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
                <h3>
                  Chitrangada Thakore <br />
                  <span>review from Facebook</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="testimonialBox">
            <StaticImage
              className="quote"
              src="../images/rightQuote.png"
              loading="eager"
              height={60}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <div className="content">
              <p>
                Super clean and comfortable place with friendly staff! Left the
                massage parlour feeling super fresh and relaxed!
              </p>
              <div className="details">
                <StaticImage
                  src="../images/avatarIcon.png"
                  loading="eager"
                  height={56}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
                <h3>
                  Seah Yang Wenn <br />
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
              src="../images/rightQuote.png"
              loading="eager"
              height={60}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <div className="content">
              <p>
                Good service! The masseurs are very skillful and friendly. Will
                be back again!
              </p>
              <div className="details">
                <StaticImage
                  src="../images/avatarIcon.png"
                  loading="eager"
                  height={56}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
                <h3>
                  Sunny Su <br />
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
              src="../images/rightQuote.png"
              loading="eager"
              height={60}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <div className="content">
              <p>One word for your massage services - AWESOME!!! 😃</p>
              <div className="details">
                <StaticImage
                  src="../images/avatarIcon.png"
                  loading="eager"
                  height={56}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
                <h3>
                  Norimah Abdullah
                  <br />
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
