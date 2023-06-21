import React from 'react'

const Popup = ({ toggle, errorMsg, info }) => {
  return (
    <div className="popup">
      {errorMsg ? (
        <>
          <header>Error</header>
          <p>Error: {errorMsg}</p>
        </>
      ) : (
        <>
          <header>Info</header>
          <p>Thank you for Contact us!! {info}</p>
        </>
      )}
      <button onClick={toggle}>Close</button>
    </div>
  )
}

export default Popup
