import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const LocationWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: var(--purple-light);
  width: max-content;
  border-radius: 6px;

  span {
    font-size:  0.875rem;
    line-height: 130%;
    color: var( --purple-dark)
  }

  svg {
    color: var( --purple-dark)
  }
`

export const Cart = styled.div`
display: flex;
  padding: 0.5rem;
  background: var(--yellow-light);
  border-radius: 6px;

  svg {
    color: var(--yellow-dark)
  }
`