import useTranslation from 'next-translate/useTranslation'
import { useCallback, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  contain: content;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.875rem;

  @media (max-width: 1190px) {
    justify-content: center;
  }
`

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem 1.75rem;
  background: var(--color-primary);
  border-radius: var(--border-radius-lg);
  color: var(--color-white);
  text-decoration: none;
  font-weight: 500;
  line-height: 1.0416;
  transition: background-color 0.1s ease;

  &::before {
    margin-right: 0.625rem;
    content: '';
    font-size: 1.2rem;
  }

  &:active {
    background-color: var(--color-primary-darker);
  }
`

const InstallViaHomebrewButton = styled.button`
  position: relative;
  margin: 0;
  padding: 1rem 0;
  appearance: none;
  border: 0 none;
  background: none;
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.1s ease;

  &:active {
    color: var(--color-primary-darker);
  }
`

const Copied = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  transition: opacity 0.1s ease;
  will-change: opacity;

  &::before {
    content: '✓';
    margin-right: 3px;
  }
`

const Download = () => {
  const { t } = useTranslation('index')

  const [copied, setCopied] = useState(false)

  const copyHomebrewInstallCommand = useCallback(() => {
    const command = 'brew install --cask linearmouse'
    if (typeof navigator.clipboard?.writeText === 'function') {
      navigator.clipboard.writeText(command)
    } else {
      const input = document.createElement('input')
      input.style.position = 'absolute'
      input.style.left = '-1000px'
      document.body.appendChild(input)
      input.value = command
      input.select()
      document.execCommand('copy')
      input.remove()
    }
    setCopied(true)
    setTimeout(() => void setCopied(false), 1000)
  }, [])

  return (
    <Wrapper>
      <Buttons>
        <DownloadButton role="button" href="https://dl.linearmouse.org/latest/LinearMouse.dmg">
          {t('install.download')}
        </DownloadButton>
        <InstallViaHomebrewButton type="button" onClick={copyHomebrewInstallCommand}>
          {t('install.install_via_homebrew')}
          <Copied style={{ opacity: copied ? 1 : 0 }}>{t('install.copied')}</Copied>
        </InstallViaHomebrewButton>
      </Buttons>
    </Wrapper>
  )
}

export default Download
