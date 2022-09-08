import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;

  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;

  padding: 4rem 0;
`

export const OrderDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }
`

export const OrderDetailsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;
  background-color: ${({ theme }) => theme['white-300']};

  border-radius: 6px 44px;
`

export const ConfirmOrder = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  border: none;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['yellow-500']};
  color: ${({ theme }) => theme['white-100']};

  font-family: 'Roboto';
  font-weight: bold;
  font-size: 0.875rem;
  font-stretch: 100;

  cursor: pointer;

  &:hover(:not(:disabled)) {
    background-color: ${({ theme }) => theme['yellow-900']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const CoffePricesDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const CartEmpty = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
