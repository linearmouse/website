import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import MaxWidthWrapper from 'components/max-width-wrapper'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4rem;
  z-index: 10;
  background-color: hsl(var(--color-background-hsl) / 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  contain: strict;

  & > ${MaxWidthWrapper} {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 2rem;
  }

  button {
    appearance: none;
    margin: 0 0 0 auto;
    padding: 0.2rem 1rem;
    border: 0 none;
    border-radius: var(--border-radius-sm);
    font: inherit;
    color: #fff;
    background-color: var(--color-primary);
    cursor: pointer;
    transition: background-color 0.15s ease;

    &:active {
      background-color: var(--color-primary-darker);
    }
  }
`

const storageKey = 'cookie_consent_informed'

const CookieConsent = () => {
  const { t } = useTranslation('common')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(storageKey)) setVisible(true)
  }, [])

  const updateCookieConsentInformed = () => {
    localStorage.setItem(storageKey, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <Wrapper>
      <MaxWidthWrapper>
        <span>{t('cookie_consent.description')}</span>
        <button type="button" onClick={updateCookieConsentInformed}>
          {t('ok')}
        </button>
      </MaxWidthWrapper>
    </Wrapper>
  )
}

export default CookieConsent
