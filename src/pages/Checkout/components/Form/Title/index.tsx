import { MapPinLine } from 'phosphor-react'
import { ReactNode } from 'react'
import { TitleContainer } from './styles'

interface TitleProps {
  icon: ReactNode
  title: string
  description: string
}

export function Title({ icon, title, description }: TitleProps) {
  return (
    <TitleContainer>
      {icon}
      <h2>
        {title}
        <span>{description}</span>
      </h2>
    </TitleContainer>
  )
}
