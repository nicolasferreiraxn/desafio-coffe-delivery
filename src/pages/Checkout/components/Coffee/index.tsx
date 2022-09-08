import { Minus, Plus, Trash } from 'phosphor-react'
import { CoffeCardButtons } from '../../../Home/components/CoffeCard/styles'
import {
  CoffeActions,
  CoffeDetails,
  CoffeFlex,
  CoffePrice,
  CoffeRemove,
} from './styles'

import { useCurrency } from '../../../../utils/useCurrency'
import { useCart } from '../../../../contexts/CartContext'
import { useEffect, useState } from 'react'

interface CoffeItemProps {
  id: string
  name: string
  price: number
  amount: number
  image: string
}

export function CoffeItem({ id, image, amount, name, price }: CoffeItemProps) {
  const [coffeeAmount, setCoffeeAmount] = useState(amount)
  const { updateCoffeeAmount, removeCoffeeFromCart } = useCart()

  useEffect(() => {
    if (coffeeAmount === 0) {
      removeCoffeeFromCart(id)
    }
  }, [coffeeAmount, removeCoffeeFromCart, id])

  function handleIncrement() {
    setCoffeeAmount(coffeeAmount + 1)
    updateCoffeeAmount({
      id,
      amount: coffeeAmount + 1,
      totalPrice: price * (coffeeAmount + 1),
    })
  }

  function handleDecrement() {
    setCoffeeAmount(coffeeAmount - 1)

    updateCoffeeAmount({
      id,
      amount: coffeeAmount - 1,
      totalPrice: price * (coffeeAmount - 1),
    })
  }

  function handleRemove() {
    removeCoffeeFromCart(id)
  }

  const amountDisabled = coffeeAmount > 1

  return (
    <CoffeDetails>
      <CoffeFlex>
        <img src={image} alt="cafe" />

        <CoffeActions>
          <p>{name}</p>

          <CoffeCardButtons>
            <div>
              <button
                onClick={handleDecrement}
                type="button"
                disabled={!amountDisabled}
              >
                <Minus size={16} weight="fill" />
              </button>
              <p>{coffeeAmount}</p>
              <button type="button" onClick={handleIncrement}>
                <Plus size={16} weight="fill" />
              </button>
            </div>

            <CoffeRemove onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </CoffeRemove>
          </CoffeCardButtons>
        </CoffeActions>
      </CoffeFlex>

      <CoffePrice>{useCurrency(price)}</CoffePrice>
    </CoffeDetails>
  )
}
