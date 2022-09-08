import {
  ButtonGroup,
  FormContainer,
  FormContent,
  Input,
  InputFlex,
  InputGrid,
  InputGroup,
  PaymentButton,
  PaymentSection,
} from './styles'
import { Title } from './Title'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

export function Form() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <h1>Complete seu pedido</h1>
      <FormContent>
        <Title
          icon={<MapPinLine size={24} />}
          title="Endereço de Entrega"
          description="Informe o endereço onde deseja receber seu pedido"
        />

        <InputGroup>
          <Input id="cep" type="text" placeholder="CEP" {...register('cep')} />
          <Input
            id="street"
            type="text"
            placeholder="Rua"
            {...register('street')}
          />

          <InputFlex>
            <Input
              id="number"
              type="text"
              placeholder="Número"
              {...register('number')}
            />
            <Input
              id="complement"
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
          </InputFlex>

          <InputGrid>
            <Input
              id="district"
              type="text"
              placeholder="Bairro"
              {...register('district')}
            />
            <Input
              id="city"
              type="text"
              placeholder="Cidade"
              {...register('city')}
            />
            <Input
              id="state"
              type="text"
              placeholder="UF"
              {...register('state')}
              required
            />
          </InputGrid>
        </InputGroup>
      </FormContent>

      <PaymentSection>
        <Title
          icon={<CurrencyDollar size={24} />}
          title="Pagamento"
          description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />

        <ButtonGroup>
          {/* radio group */}
          <PaymentButton>
            <input
              type="radio"
              id="money"
              value="money"
              {...register('payment')}
            />
            <label htmlFor="money">
              <Money size={22} />
              Dinheiro
            </label>
          </PaymentButton>

          <PaymentButton>
            <input
              type="radio"
              id="credit-card"
              value="credit-card"
              {...register('payment')}
            />
            <label htmlFor="credit-card">
              <CreditCard size={22} />
              Cartão de Crédito
            </label>
          </PaymentButton>

          <PaymentButton>
            <input
              type="radio"
              id="bank"
              value="bank"
              {...register('payment')}
            />
            <label htmlFor="bank">
              <Bank size={22} />
              Cartão de débito
            </label>
          </PaymentButton>
        </ButtonGroup>
      </PaymentSection>
    </FormContainer>
  )
}
