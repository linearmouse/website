import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1.875rem;
  font-family: var(--font-family-title);

  a {
    font-weight: bold;
    text-decoration: none;
    color: var(--color-text);
    transition: color 0.15s ease;

    &:hover {
      color: var(--color-primary);
    }
  }

  @media (max-width: 512px) {
    margin-top: 1.5rem;
    margin-right: auto;
  }
`

const Navigation = () => {
  return (
    <Wrapper role="navigation">
      <a href="https://github.com/linearmouse/linearmouse">GitHub</a>
      <a href="https://github.com/linearmouse/linearmouse/discussions">Discussions</a>
    </Wrapper>
  )
}

export default Navigation
