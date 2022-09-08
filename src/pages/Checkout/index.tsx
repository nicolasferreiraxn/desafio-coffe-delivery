import { Form } from './components/Form'
import {
  CartEmpty,
  CheckoutContainer,
  CoffePricesDetails,
  ConfirmOrder,
  OrderDetailsContainer,
  OrderDetailsContent,
} from './styles'

import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { CoffeItem } from './components/Coffee'
import { useCurrency } from '../../utils/useCurrency'
import { FormProvider, useForm } from 'react-hook-form'

import { zodValidation } from '../../utils/zodValidation'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SmileySad } from 'phosphor-react'

type CartFromData = zod.infer<typeof zodValidation>

export function Checkout() {
  const navigate = useNavigate()

  const { cart, createOrder } = useCart()

  const cartFormSchema = useForm<CartFromData>({
    resolver: zodResolver(zodValidation),
    mode: 'all',
  })

  const { handleSubmit, formState } = cartFormSchema
  const { errors, isValid } = formState
  console.log(errors, isValid)

  const totalItens = cart.reduce((acc, item) => {
    return acc + item.price * item.amount
  }, 0)

  const totalPrice = cart.reduce((acc, item) => {
    const total = acc + item.price * item.amount
    return total
  }, 0)

  const calculateShipping = () => {
    const shipping = totalPrice * 0.08
    return Math.round(shipping * 100) / 100
  }

  const calculateTotal = () => {
    const total = totalPrice + calculateShipping()
    return Math.round(total * 100) / 100
  }

  function handleSendCart(data: CartFromData) {
    createOrder({
      cep: data.cep,
      city: data.city,
      complement: data.complement,
      district: data.district,
      number: data.number,
      paymentMethod: data.payment,
      state: data.state,
      street: data.street,
    })

    navigate('/success')
  }

  const totalItensCurrency = useCurrency(totalItens)
  const totalPriceShipping = useCurrency(calculateShipping())
  const totalPriceCurrency = useCurrency(calculateTotal())

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleSendCart)}>
      <FormProvider {...cartFormSchema}>
        <Form />
      </FormProvider>

      <OrderDetailsContainer>
        <h1>Cafés selecionados</h1>
        <OrderDetailsContent>
          {cart.length === 0 ? (
            <CartEmpty>
              <h3>Poxa, que pena seu carrinho está vazio!</h3>
            </CartEmpty>
          ) : (
            <>
              {cart.map((coffe) => (
                <CoffeItem
                  key={coffe.name}
                  amount={coffe.amount}
                  image={coffe.image}
                  name={coffe.name}
                  price={coffe.price}
                  id={coffe.id}
                />
              ))}

              <CoffePricesDetails>
                <p>
                  Total de itens <span>{totalItensCurrency}</span>
                </p>
                <p>
                  Entrega <span>{totalPriceShipping}</span>
                </p>
                <h2>
                  Total <span>{totalPriceCurrency}</span>
                </h2>
              </CoffePricesDetails>
              <ConfirmOrder type="submit" disabled={!isValid}>
                CONFIRMAR PEDIDO
              </ConfirmOrder>
            </>
          )}
        </OrderDetailsContent>
      </OrderDetailsContainer>
    </CheckoutContainer>
  )
}
