import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background-color: ${(props) => props.theme['white-300']};
  border-radius: 6px 36px 6px 36px;

  > img {
    width: 120px;
    height: 120px;
    margin-top: -40px;
  }

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }

  > p {
    margin-top: 0.5rem;

    color: ${(props) => props.theme['gray-300']};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
  }
`

export const CoffeCardTypes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  margin-top: 1rem;
  margin-bottom: 1rem;

  span {
    color: ${(props) => props.theme['yellow-900']};
    background-color: ${(props) => props.theme['yellow-100']};
    border-radius: 100px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;

    padding: 4px 8px;
  }
`

export const CoffeCardInteraction = styled.div`
  width: 100%;
  max-width: 13.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 2rem;
`
export const CoffeCardPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;

  span {
    margin-top: 0.25rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
  }

  p {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
  }
`

export const CoffeCardButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['white-500']};

    border-radius: 8px 8px 8px 8px;

    button {
      width: 2rem;
      height: 2.3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${(props) => props.theme['white-500']};

      border: none;
      border-radius: 8px 8px 8px 8px;

      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }

      svg {
        color: ${(props) => props.theme['purple-900']};
      }
    }
  }
`
export const CoffeAddCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.3rem;

  border: none;
  border-radius: 8px 8px 8px 8px;

  background-color: ${(props) => props.theme['purple-900']};

  cursor: pointer;

  svg {
    color: ${(props) => props.theme['white-100']};
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['purple-500']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
