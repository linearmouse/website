'use client'

import MaxWidthWrapper from 'components/max-width-wrapper'
import { styled } from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 0;
  font-size: 0.875rem;

  & > ${MaxWidthWrapper} {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
`

export const Copyright = styled.div`
  opacity: 0.8;
`

export const Links = styled.ol`
  display: flex;
  gap: 1rem;

  &,
  li {
    margin: 0;
    padding: 0;
  }

  & {
    margin-inline-start: auto;
  }

  a {
    color: var(--color-text);
    text-decoration: none;
    font-weight: 500;
  }
`
