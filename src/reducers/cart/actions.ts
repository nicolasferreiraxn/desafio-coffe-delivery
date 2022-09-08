import { CartItens, OrderProps, UpdateCartAmount } from './reducer'

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_AMOUNT = 'UPDATE_AMOUNT',
  FINISH_ORDER = 'FINISH_ORDER',
  CLEAR_CART = 'CLEAR_CART',
}

export function addNewProductToCart(product: CartItens) {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: product,
  }
}

export function removeProductFromCart(id: string) {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: id,
  }
}

export function updateAmount(update: UpdateCartAmount) {
  return {
    type: CartActionTypes.UPDATE_AMOUNT,
    payload: update,
  }
}

export function finishOrder(order: OrderProps) {
  return {
    type: CartActionTypes.FINISH_ORDER,
    payload: order,
  }
}

export function clearCart() {
  return {
    type: CartActionTypes.CLEAR_CART,
  }
}
