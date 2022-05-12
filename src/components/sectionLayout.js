import * as React from "react"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./sectionLayout.css"

const Layout = ({ children, background }) => {
  return (
    <>
      {background ? (
        <div
          style={{
            backgroundColor: "#DAD2CB",
          }}
        >
          <main
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "48px 0px",
            }}
          >
            {children}
          </main>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#0000",
          }}
        >
          <main
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "48px 0px",
            }}
          >
            {children}
          </main>
        </div>
      )}
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
