import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  font-family: var(--font-family-title);

  a {
    margin-left: 1.875rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--color-text);
    transition: color 0.15s ease;

    &:hover {
      color: var(--color-primary);
    }
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
