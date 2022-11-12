import React from 'react'

import { CardImage, CardInfos, CardTitle, Container } from './styles'

export type CardProps = {
  profile: number
  title: string
  happiness: number
  price: number
}

const Card = ({ profile, title, happiness, price }: CardProps) => {
  return (
    <Container>
      <CardImage source={profile} resizeMode='cover' />
      <CardTitle>{title}</CardTitle>
      <CardInfos>Felicidade: +{happiness}%</CardInfos>
      <CardInfos>Valor: -R${price}</CardInfos>
    </Container>
  )
}

export default Card
