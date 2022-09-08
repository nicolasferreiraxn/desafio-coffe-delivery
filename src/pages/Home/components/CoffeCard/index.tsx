import {
  CoffeAddCartButton,
  CoffeCardContainer,
  CoffeCardButtons,
  CoffeCardInteraction,
  CoffeCardPrice,
  CoffeCardTypes,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useCart } from '../../../../contexts/CartContext'
import { useCurrency } from '../../../../utils/useCurrency'

type CoffeeData = {
  id: string
  image: string
  type: string[]
  name: string
  description: string
  price: number
}

interface CoffeeCardProps {
  coffe: CoffeeData
}

export function CoffeCard({ coffe }: CoffeeCardProps) {
  const { cart, addCoffeeToCart, removeCoffeeFromCart } = useCart()
  const findAmount = cart.find((item) => item.id === coffe.id)

  const [amount, setAmount] = useState(findAmount ? findAmount.amount : 0)

  function handleAddCoffeeToCart() {
    const coffeeAdded = {
      id: coffe.id,
      image: coffe.image,
      name: coffe.name,
      amount,
      price: coffe.price,
      totalPrice: coffe.price,
    }
    addCoffeeToCart(coffeeAdded)
  }

  function handleIncremmentAmmount() {
    setAmount(amount + 1)
  }

  function handleDecrementAmmount() {
    if (amount > 0) {
      setAmount(amount - 1)
    }
  }

  useEffect(() => {
    if (amount === 0) {
      const findCoffee = cart.find((coffee) => coffee.id === coffe.id)

      if (findCoffee) {
        return removeCoffeeFromCart(coffe.id)
      }
    }
  }, [amount, cart, coffe, removeCoffeeFromCart])

  const coffeeInCart = amount > 0
  const price = useCurrency(coffe.price)

  return (
    <CoffeCardContainer>
      <img src={coffe.image} alt="Mocchaccino" />

      <CoffeCardTypes>
        {coffe.type.map((type: string) => (
          <span key={type}>{type}</span>
        ))}
      </CoffeCardTypes>

      <h1>{coffe.name}</h1>
      <p>{coffe.description}</p>

      <CoffeCardInteraction>
        <CoffeCardPrice>
          <p>{price}</p>
        </CoffeCardPrice>

        <CoffeCardButtons>
          <div>
            <button onClick={handleDecrementAmmount}>
              <Minus size={16} weight="bold" />
            </button>
            <p>{amount}</p>
            <button onClick={handleIncremmentAmmount}>
              <Plus size={16} weight="bold" />
            </button>
          </div>

          <CoffeAddCartButton
            onClick={handleAddCoffeeToCart}
            disabled={!coffeeInCart}
          >
            <ShoppingCart size={18} weight="fill" />
          </CoffeAddCartButton>
        </CoffeCardButtons>
      </CoffeCardInteraction>
    </CoffeCardContainer>
  )
}
