import styled from 'styled-components'

export const FormContainer = styled.div`
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

export const FormContent = styled.div`
  background-color: ${({ theme }) => theme['white-300']};
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  svg {
    color: ${(props) => props.theme['yellow-900']};
  }
`

export const InputGroup = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input[name='cep'] {
    width: 12.5rem;
  }

  input[name='number'] {
    width: 12.5rem;
  }
`

export const InputFlex = styled.div`
  display: flex;
  gap: 0.75rem;

  input:last-child {
    flex: 1;
  }
`
export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  gap: 0.75rem;
`

export const PaymentSection = styled(FormContent)`
  display: flex;
  flex-direction: column;

  svg {
    color: ${({ theme }) => theme['purple-900']};
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  button {
    width: 100%;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    gap: 0.5rem;

    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['white-500']};
    color: ${({ theme }) => theme['gray-400']};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;

    cursor: pointer;
  }

  button:hover {
    background-color: ${({ theme }) => theme['white-600']};
  }
`

export const Input = styled.input`
  background-color: ${({ theme }) => theme['white-400']};
  padding: 0.75rem;

  border: 1px solid ${({ theme }) => theme['white-500']};
  border-radius: 6px;

  color: ${({ theme }) => theme['gray-400']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  /* active border color */

  :focus {
    outline: 0;
    border: 1px solid ${(props) => props.theme['yellow-900']};
    &::placeholder {
      color: transparent;
    }
  }
`

export const PaymentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 12.125rem;
  height: 3.188rem;

  background-color: ${({ theme }) => theme['white-500']};
  border-radius: 6px;

  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['white-600']};
  }

  /* hide radio */
  input[type='radio'] {
    display: none;
  }

  label {
    border: 1px solid transparent;

    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme['gray-400']};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 160%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    padding: 1rem;

    border-radius: 6px;

    cursor: pointer;
  }

  /* radio selected style */

  input[type='radio']:checked + label {
    background-color: ${({ theme }) => theme['purple-100']};
    border: 1px solid ${({ theme }) => theme['purple-500']};
  }

  /* manter paragrago na mesma linha */
  p {
    display: inline;
  }
`
