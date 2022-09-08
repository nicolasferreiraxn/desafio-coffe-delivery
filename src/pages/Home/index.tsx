import {
  CoffeItem,
  CoffesContainer,
  CoffesHeader,
  CoffesList,
  CoffesTypes,
  DeliveryPackage,
  DeliveryTime,
  HomeContainer,
  IntroContainer,
  IntroContent,
  IntroGrid,
  ShoppingItem,
} from './styles'

import coffeHero from '../../assets/coffe-hero.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeCard } from './components/CoffeCard'
import { useContext } from 'react'
import coffeData from '../../coffe-data'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <IntroGrid>
            <ShoppingItem>
              <span>
                <ShoppingCart weight="fill" />
              </span>
              Compra simples e segura
            </ShoppingItem>
            <DeliveryPackage>
              <span>
                <Package weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </DeliveryPackage>
            <DeliveryTime>
              <span>
                <Timer weight="fill" />
              </span>
              Entrega rápida e rastreada
            </DeliveryTime>
            <CoffeItem>
              <span>
                <Coffee weight="fill" />
              </span>
              O café chega fresquinho até você
            </CoffeItem>
          </IntroGrid>
        </IntroContent>

        <img src={coffeHero} alt="Coffe Hero" />
      </IntroContainer>

      <CoffesContainer>
        <CoffesHeader>
          <h1>Nossos cafés</h1>

          <CoffesTypes>
            <span>TRADICIONAL</span>
            <span>ESPECIAL</span>
            <span>COM LEITE</span>
            <span>ALCOÓLICO</span>
            <span>GELADO</span>
          </CoffesTypes>
        </CoffesHeader>

        <CoffesList>
          {coffeData.map((coffe) => (
            <CoffeCard key={coffe.id} coffe={coffe} />
          ))}
        </CoffesList>
      </CoffesContainer>
    </HomeContainer>
  )
}
