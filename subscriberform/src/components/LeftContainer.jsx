import React, { useState } from 'react'
import './Styles.css'
import Envelope from '../assets/envelope-solid.svg'
import Lock from '../assets/lock-solid.svg'
import Popup from './Popup'
import InputContainer from './InputContainer'
import Header from './Header'
import validator from 'validator'

const LeftContainer = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setretypePassword] = useState('')
  const [error, setError] = useState('')
  const [showPopup, setshowPopup] = useState(false)

  const handleClick = () => {
    if (!mail || !password || !retypePassword) {
      setError('Please enter all the fields')
      setshowPopup(true)
    } else if (!validator.isEmail(mail)) {
      setError('Please enter valid mail address ')
      setshowPopup(true)
    } else if (!validator.isStrongPassword(password)) {
      setError('Please enter strong password')
      setshowPopup(true)
    } else if (password !== retypePassword) {
      setError('Password do not match')
      setshowPopup(true)
    } else {
      setError('')
      setshowPopup(true)
    }
  }
  return (
    <>
      <div className="left-container">
        <Header />
        <InputContainer
          imageSrc={Envelope}
          altText="email"
          inputType="email"
          placeholder="Enter your email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          required
        />

        <InputContainer
          imageSrc={Lock}
          altText="password"
          inputType="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <InputContainer
          imageSrc={Lock}
          altText="password"
          inputType="password"
          placeholder="Retype your password"
          value={retypePassword}
          onChange={(e) => setretypePassword(e.target.value)}
          required
        />

        <button onClick={handleClick}>Join</button>
        <p>
          Already have an account?
          <a href="#login">Login</a>
        </p>
      </div>
      {showPopup && (
        <Popup
          toggle={() => setshowPopup(false)}
          errorMsg={error}
          info={mail}
        />
      )}
    </>
  )
}

export default LeftContainer
