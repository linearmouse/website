'use client'

import { styled } from 'styled-components'
import MaxWidthWrapper from '../max-width-wrapper'

export const Wrapper = styled.div``

export const FeatureWrapper = styled.div`
  position: relative;
  padding: 6.25rem 0;
  box-sizing: border-box;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;

  &:nth-child(odd) {
    background-color: var(--color-white);
  }

  ${MaxWidthWrapper} {
    margin-inline-start: 52vw;
    margin-inline-end: auto;
  }

  &:nth-child(even) {
    ${MaxWidthWrapper} {
      margin-inline-end: 52vw;
      margin-inline-start: auto;
    }
  }

  &:nth-child(odd) ${MaxWidthWrapper} {
    padding-inline-start: 0;
  }

  &:nth-child(even) ${MaxWidthWrapper} {
    padding-inline-end: 0;
  }

  @media (max-width: 960px) {
    flex-direction: column;

    &:nth-child(odd) ${MaxWidthWrapper}, &:nth-child(even) ${MaxWidthWrapper} {
      margin: 0;
      padding: 0 2rem;
      box-sizing: border-box;
      width: 100%;
    }
  }
`

export const FeatureImageWrapper = styled.div`
  position: absolute;
  right: 50vw;
  top: 3.75rem;

  &:lang(ar),
  &:lang(he) {
    right: revert;
    left: 50vw;
  }

  ${FeatureWrapper}:nth-child(even) > & {
    right: revert;
    left: 50vw;

    &:lang(ar),
    &:lang(he) {
      right: 50vw;
      left: revert;
    }
  }

  @media (max-width: 960px) {
    position: static;
    margin-bottom: -20rem;
  }
`

export const Heading = styled.div`
  margin-bottom: 1.5rem;
  font-size: 2.25rem;
  line-height: 1.3;
  font-family: var(--font-family-title);
  font-weight: bold;
  white-space: pre-wrap;

  strong {
    position: relative;
    color: var(--color-primary-dark);
    line-height: 1.3;
    width: fit-content;
    transition: opacity 0.5s 0.2s ease;
    will-change: opacity;
    white-space: nowrap;

    &::after {
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      bottom: 0.2em;
      height: 0.3em;
      background-color: var(--color-primary);
      opacity: 0.2;
    }
  }

  @media (max-width: 960px) {
    text-align: center;
  }
`

export const Description = styled.div`
  opacity: 0.8;
  white-space: pre-wrap;

  p:not(:last-child) {
    margin: 0 0 0.5rem;
  }
`
