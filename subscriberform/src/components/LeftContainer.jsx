import React, { useState } from 'react'
import './LeftContainer.css'
import Envelope from '../assets/envelope-solid.svg'
import Lock from '../assets/lock-solid.svg'
import Popup from './Popup'
import InputContainer from './InputContainer'
import Header from './Header'
import validator from 'validator'
import { useTranslation } from 'react-i18next'

const LeftContainer = () => {
  const { t } = useTranslation()

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
          placeholder={t('email')} //"Enter your email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          required
        />

        <InputContainer
          imageSrc={Lock}
          altText="password"
          inputType="password"
          placeholder={t('password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <InputContainer
          imageSrc={Lock}
          altText="password"
          inputType="password"
          placeholder={t('retypePassword')}
          value={retypePassword}
          onChange={(e) => setretypePassword(e.target.value)}
          required
        />

        <button onClick={handleClick}>{t('join')}</button>
        <p>
          {t('alreadyAccount')}
          <a href="#login">{t('login')}</a>
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
