import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Settings.css'
import i18next from 'i18next'
import { languages } from '../model/languages'
import SettingsIcon from '../assets/icons8-settings.svg'

const Settings = () => {
  const { t } = useTranslation()
  const [showLangOption, setShowLangOption] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('')

  const handleLanguageChange = (languageCode) => {
    i18next.changeLanguage(languageCode)
    setSelectedLanguage(languageCode)
    setShowLangOption(false)
  }

  return (
    <div className="settings-div">
      <div className="language-options">
        {showLangOption ? (
          <ul className="ul-lang open">
            {languages.map((language) => (
              <li
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={selectedLanguage === language.code ? 'selected' : ''}
              >
                <img src={language.flag_image} width="24px" height="24px" />
                {t(language.name)}
              </li>
            ))}
          </ul>
        ) : (
          <img
            src={SettingsIcon}
            onClick={() => {
              setShowLangOption(true)
            }}
            width="24px"
            height="24px"
            className='setting-img'
          />
        )}
      </div>
    </div>
  )
}

export default Settings
