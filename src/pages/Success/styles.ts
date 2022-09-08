import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 8rem;
  gap: 2.5rem;
`
export const OrderConfirmedTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${({ theme }) => theme['yellow-900']};
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${({ theme }) => theme['gray-500']};
  }
`

export const OrderConfirmedMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 6rem;
`

export const OrderConfirmedDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  margin: 1px;

  border-radius: 6px 36px;

  position: relative;
  background-color: ${(props) => props.theme['white-200']};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: -1px;
    border-radius: inherit;
    z-index: -1;
    background-image: linear-gradient(95deg, #dbac2c, #8047f8);
  }
`

export const OrderDeliveryInfo = styled.div`
  display: flex;
  flex-direction: flex-start;
  align-items: flex-start;
  gap: 1rem;

  div {
    background-color: ${({ theme }) => theme['purple-500']};
    padding: 0.5rem;
    border-radius: 1000px;

    svg {
      color: ${({ theme }) => theme['white-100']};
    }
  }
`

export const DeliverySectionBase = styled.div`
  display: flex;
  gap: 0.75rem;
  header {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme['white-200']};
  }
`

export const DeliveryDestination = styled(DeliverySectionBase)`
  header {
    background-color: ${(props) => props.theme['purple-500']};
  }
  span {
    text-transform: capitalize;
  }
`

export const DeliveryTimer = styled(DeliverySectionBase)`
  header {
    background-color: ${(props) => props.theme['yellow-500']};
  }
`

export const DeliveryPayment = styled(DeliverySectionBase)`
  header {
    background-color: ${(props) => props.theme['yellow-900']};
  }
`
