import React from "react"
import SectionLayout from "./sectionLayout"
import { Card, Row, Col, Button } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const reviewSection = () => {
  return (
    <SectionLayout background={true}>
      <Card.Title style={{ textAlign: "center", paddingBottom: "16px" }}>
        Review
      </Card.Title>{" "}
      <div style={{ overflowX: "auto" }}>
        <table>
          <td>
            <Card
              style={{
                minWidth: "320px",
                marginLeft: "4px",
                textAlign: "center",
                minHeight: "240px",
              }}
            >
              <Card.Body>
                  <StaticImage
                    src="../images/avatarIcon.png"
                    loading="eager"
                    height={60}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                <Card.Text style={{paddingTop: '12px'}}>Keith Chu</Card.Text>
                <Card.Text>
                  'Quite good massage. recommend owner to change bed please as
                  it's very hard and pressing hard on the face.'
                </Card.Text>
              </Card.Body>
            </Card>
          </td>
          <td>
            <Card
              style={{
                minWidth: "320px",
                marginLeft: "4px",
                textAlign: "center",
                minHeight: "240px",
              }}
            >
              <Card.Body>
                  <StaticImage
                    src="../images/avatarIcon.png"
                    loading="eager"
                    height={60}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                <Card.Text style={{paddingTop: '12px'}}>Janelle Cheeeeyyyyw</Card.Text>
                <Card.Text>
                  'Clean and neat environment with awesome skills.'
                </Card.Text>
              </Card.Body>
            </Card>
          </td>
          <td>
            <Card
              style={{
                minWidth: "320px",
                marginLeft: "4px",
                textAlign: "center",
                minHeight: "240px",
              }}
            >
              <Card.Body>
                  <StaticImage
                    src="../images/avatarIcon.png"
                    loading="eager"
                    height={60}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                <Card.Text style={{paddingTop: '12px'}}>Seah Yang Wenn</Card.Text>
                <Card.Text>
                  'Super clean and comfortable place with friendly staff! Left
                  the massage parlour feeling super fresh and relaxed!'
                </Card.Text>
              </Card.Body>
            </Card>
          </td>
          <td>
            <Card
              style={{
                minWidth: "320px",
                marginLeft: "4px",
                textAlign: "center",
                minHeight: "240px",
              }}
            >
              <Card.Body>
                  <StaticImage
                    src="../images/avatarIcon.png"
                    loading="eager"
                    height={60}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                <Card.Text style={{paddingTop: '12px'}}>Sunny Su</Card.Text>
                <Card.Text>
                  'Good service! The masseurs are very skillful and friendly.
                  Will be back again.!'
                </Card.Text>
              </Card.Body>
            </Card>
          </td>
          <td>
            <Card
              style={{
                minWidth: "320px",
                marginLeft: "4px",
                textAlign: "center",
                minHeight: "240px",
              }}
            >
              <Card.Body>
                  <StaticImage
                    src="../images/avatarIcon.png"
                    loading="eager"
                    height={60}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                <Card.Text style={{paddingTop: '12px'}}>Norimah Abdullah</Card.Text>
                <Card.Text>
                  'One word for your massage services - AWESOME!!! 😃'
                </Card.Text>
              </Card.Body>
            </Card>
          </td>
        </table>
      </div>
    </SectionLayout>
  )
}

export default reviewSection
