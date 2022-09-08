import styled from 'styled-components'

export const CoffeDetails = styled.div`
  padding: 0.5rem 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  padding-bottom: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['white-500']};
`

export const CoffeFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CoffeActions = styled.div`
  height: 4rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0.5rem;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-500']};
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
`

export const CoffeRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['white-500']};
  text-transform: uppercase;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['white-600']};
  }

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }
`

export const CoffePrice = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
`
