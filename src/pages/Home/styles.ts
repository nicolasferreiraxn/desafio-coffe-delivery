import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const IntroContainer = styled.main`
  width: 100%;

  display: flex;
  gap: 3.5rem;
  padding: 4.875rem 0 0;

  margin-bottom: 6.75rem;
`
export const IntroContent = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
  }

  p {
    margin-top: 1rem;

    width: 36.75rem;
    height: 3.25rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    color: ${(props) => props.theme['gray-500']};
    font-stretch: 100;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
`

export const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 4.125rem;
`

export const IntroGridItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 0.75rem;

  margin-bottom: 1.25rem;

  span {
    border-radius: 50%;

    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme['white-200']};
  }
`

export const ShoppingItem = styled(IntroGridItem)`
  span {
    background-color: ${(props) => props.theme['yellow-900']};
  }
`

export const DeliveryTime = styled(IntroGridItem)`
  span {
    background-color: ${(props) => props.theme['yellow-500']};
  }
`
export const DeliveryPackage = styled(IntroGridItem)`
  span {
    background-color: ${(props) => props.theme['gray-400']};
  }
`
export const CoffeItem = styled(IntroGridItem)`
  span {
    background-color: ${(props) => props.theme['purple-500']};
  }
`

export const CoffesContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export const CoffesHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3.375rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    display: flex;
    align-items: center;
  }
`

export const CoffesTypes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    padding: 6px 12px;
    border: 1px solid ${(props) => props.theme['yellow-500']};
    border-radius: 100px;
    color: ${(props) => props.theme['yellow-900']};
  }
`

export const CoffesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  margin-bottom: 10rem;
`
