import { CurrencyDollar, MapPin, MapPinLine, Timer } from 'phosphor-react'
import entregador from '../../assets/entregador.svg'
import { useCart } from '../../contexts/CartContext'
import {
  DeliveryDestination,
  DeliveryPayment,
  DeliveryTimer,
  OrderConfirmedContainer,
  OrderConfirmedDetails,
  OrderConfirmedMain,
  OrderConfirmedTitle,
  OrderDeliveryInfo,
} from './styles'

export function Success() {
  const { order } = useCart()
  console.log(order)

  return (
    <OrderConfirmedContainer>
      <OrderConfirmedTitle>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </OrderConfirmedTitle>

      <OrderConfirmedMain>
        <OrderConfirmedDetails>
          <DeliveryDestination>
            <header>
              <MapPin size={16} weight="fill" />
            </header>
            <p>
              Entrega em{' '}
              <span>
                <strong>{order?.street}</strong>, {order?.number}
                <br />
                {order?.district} - {order?.city}, {order?.state}
              </span>
            </p>
          </DeliveryDestination>
          <DeliveryTimer>
            <header>
              <Timer size={16} weight="fill" />
            </header>

            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </DeliveryTimer>
          <DeliveryPayment>
            <header>
              <CurrencyDollar size={16} weight="fill" />
            </header>

            <p>
              Pagamento na entrega
              <br />
              <strong>{order?.paymentMethod}</strong>
            </p>
          </DeliveryPayment>
        </OrderConfirmedDetails>

        <img src={entregador} alt="entregador" />
      </OrderConfirmedMain>
    </OrderConfirmedContainer>
  )
}
