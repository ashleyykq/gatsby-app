import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children, landing }) => {
  return (
    <>
      {landing ? (
        <div
            className= "section-layout"
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "auto",
            }}
            className='layout-padding-top'
          >
            {children}
          </div>
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
              padding: "0px 0px 40px 0px",
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
