import React from 'react'
import './RightContainer.css'
import { useTranslation } from 'react-i18next'

const RightContainer = () => {
  const { t } = useTranslation()
  return (
    <div className="right-container">
      <p>{t('everyFriend')}</p>
      <p>{t('newAdventure')}</p>
      <h6>{t('joinUs')}</h6>
    </div>
  )
}

export default RightContainer
