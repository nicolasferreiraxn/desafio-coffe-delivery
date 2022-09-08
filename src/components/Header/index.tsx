import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import coffeLogo from '../../assets/coffe-logo.svg'
import { useCart } from '../../contexts/CartContext'
import {
  Actions,
  Cart,
  HeaderContainer,
  HeaderContent,
  Location,
  CartWithItem,
} from './styles'

export function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={coffeLogo} alt="Coffe Logo" />
        </NavLink>

        <Actions>
          <Location>
            <MapPin weight="fill" size={22} /> Av. Paulista, SP
          </Location>

          {cart.length === 0 ? (
            <NavLink to="/checkout">
              <Cart>
                <ShoppingCart weight="fill" size={22} />
              </Cart>
            </NavLink>
          ) : (
            <NavLink to="/checkout">
              <CartWithItem>
                <ShoppingCart weight="fill" size={22} />
                <span>{cart.length}</span>
              </CartWithItem>
            </NavLink>
          )}
        </Actions>
      </HeaderContent>
    </HeaderContainer>
  )
}
