'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import MaxWidthWrapper from 'components/max-width-wrapper'

const Wrapper = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 10;
  padding: 1rem 0;
  background-color: hsl(var(--color-background-hsl) / 0.8);
  backdrop-filter: saturate(180%) blur(20px);

  & > ${MaxWidthWrapper} {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  button {
    appearance: none;
    margin: 0 0 0 auto;
    padding: 0.4rem 1.5rem;
    border: 0 none;
    border-radius: var(--border-radius-sm);
    font: inherit;
    font-weight: bold;
    color: #fff;
    background-color: var(--color-primary);
    cursor: pointer;
    transition: background-color 0.15s ease;

    &:active {
      background-color: var(--color-primary-darker);
    }
  }

  @media (max-width: 512px) {
    & > ${MaxWidthWrapper} {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    button {
      margin: 0;
      width: 100%;
    }
  }
`

const storageKey = 'cookie_consent_informed'

const CookieConsent = () => {
  const t = useTranslations('common')
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
