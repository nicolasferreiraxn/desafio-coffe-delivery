import { produce } from 'immer'
import { CartActionTypes } from './actions'

export interface CartItens {
  id: string
  image: string
  name: string
  amount: number
  price: number
  totalPrice: number
}

export interface OrderProps {
  cep: string
  city: string
  complement: string
  district: string
  number: string
  state: string
  street: string
  paymentMethod: string
}

export interface UpdateCartAmount {
  id: string
  amount: number
  totalPrice: number
}

interface CartState {
  cart: CartItens[]
  order: any
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        const productIndex = draft.cart.findIndex(
          (product) => product.id === action.payload.id,
        )

        if (productIndex >= 0) {
          draft.cart[productIndex].amount = action.payload.amount
          const totalPrice =
            draft.cart[productIndex].price * action.payload.amount

          draft.cart[productIndex].totalPrice = totalPrice
        } else {
          const totalPrice = action.payload.price * action.payload.amount

          draft.cart.push({
            ...action.payload,
            amount: action.payload.amount,
            totalPrice,
          })
        }
      })
    case CartActionTypes.REMOVE_FROM_CART:
      return produce(state, (draft) => {
        const productIndex = draft.cart.findIndex(
          (product) => product.id === action.payload,
        )

        if (productIndex >= 0) {
          draft.cart.splice(productIndex, 1)
        }
      })
    case CartActionTypes.UPDATE_AMOUNT:
      return produce(state, (draft) => {
        const productIndex = draft.cart.findIndex(
          (product) => product.id === action.payload.id,
        )

        if (productIndex >= 0) {
          draft.cart[productIndex].amount = action.payload.amount
          const totalPrice =
            draft.cart[productIndex].price * action.payload.amount

          draft.cart[productIndex].totalPrice = totalPrice
        }
      })
    case CartActionTypes.FINISH_ORDER:
      return produce(state, (draft) => {
        draft.order = action.payload
      })
    case CartActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.cart = []
      })
    default:
      return state
  }
}
