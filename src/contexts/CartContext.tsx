import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addNewProductToCart,
  clearCart,
  finishOrder,
  removeProductFromCart,
  updateAmount,
} from '../reducers/cart/actions'
import {
  CartItens,
  cartReducer,
  OrderProps,
  UpdateCartAmount,
} from '../reducers/cart/reducer'

type CartContextType = {
  cart: CartItens[]
  order: OrderProps | null

  addCoffeeToCart: (coffee: CartItens) => void
  updateCoffeeAmount: (update: UpdateCartAmount) => void
  removeCoffeeFromCart: (id: string) => void
  createOrder: (order: OrderProps) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      order: null,
    },
    () => {
      const localData = localStorage.getItem('@ignite-desafio:coffe-delivery')
      console.log(localData)
      return localData ? JSON.parse(localData) : { cart: [], order: null }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@ignite-desafio:coffe-delivery', stateJSON)
  }, [cartState])

  const { cart, order } = cartState

  console.log(cartState)

  function addCoffeeToCart(coffeeAdded: any) {
    dispatch(addNewProductToCart(coffeeAdded))
  }

  function updateCoffeeAmount({ id, amount, totalPrice }: UpdateCartAmount) {
    dispatch(updateAmount({ id, amount, totalPrice }))
  }

  function removeCoffeeFromCart(id: string) {
    dispatch(removeProductFromCart(id))
  }

  function createOrder(order: OrderProps) {
    dispatch(finishOrder(order))
    dispatch(clearCart())
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        updateCoffeeAmount,
        removeCoffeeFromCart,
        order,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
