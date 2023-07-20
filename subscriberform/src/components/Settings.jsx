import React from 'react'
import { useTranslation } from 'react-i18next'
import './Settings.css'
import i18next from 'i18next'
import { languages } from '../model/languages'

const Settings = () => {
  const { t } = useTranslation()

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value
    i18next.changeLanguage(selectedLanguage)
  }

  return (
    <div className="settings-div">
      <div className="language-options">
        <select onChange={handleLanguageChange}>
          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {t(language.name)}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Settings

// import React from 'react'
// import { useTranslation } from 'react-i18next'
// import './Settings.css'
// import i18n from 'i18next'
// // import 'flag-icon-css/css/flag-icon.min.css'

// const languages = [
//   {
//     code: 'fr',
//     name: 'Français',
//     country_code: 'fr',
//   },
//   {
//     code: 'en',
//     name: 'English',
//     country_code: 'gb',
//   },
//   {
//     code: 'ar',
//     name: 'العربية',
//     dir: 'rtl',
//     country_code: 'sa',
//   },
// ]

// const Settings = () => {
//   const { t } = useTranslation()

//   const handleLanguageChange = (event) => {
//     const selectedLanguage = event.target.value
//     i18n.changeLanguage(selectedLanguage)
//   }

//   return (
//     <div className="settings-div">
//       <div className="language-options">
//         <select onChange={handleLanguageChange}>
//           <option
//             value="en"
//             onClick={() => {
//               i18n.changeLanguage(code)
//             }}
//           >
//             <span className={`flag-icon flag-icon-en mx-2`}></span>
//             {t('english')}
//           </option>
//           <option value="es">{t('spanish')}</option>
//         </select>
//       </div>
//     </div>
//   )
// }

// export default Settings
