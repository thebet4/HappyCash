import * as React from 'react'

import type { CardModel } from './AnimatedCard'
import { Cards } from './Cards'

export const cards: CardModel[] = [
  {
    id: 1,
    happiness: 16,
    profile: require('./assets/10.png'),
    price: 500,
    title: 'Seus amigos começaram a andar de bicleta, quer comprar uma para andar com eles?',
  },

  {
    id: 2,
    happiness: 22,
    profile: require('./assets/9.png'),
    price: 1000,
    title: 'Deseja comprar um videogame novo? (lembrando que é um bem passivo)',
  },

  {
    id: 3,
    happiness: 10,
    profile: require('./assets/8.png'),
    price: 350,
    title: 'Você foi em uma loja e gostou de algumas roupas, quer comprá-las?',
  },

  {
    id: 4,
    happiness: 22,
    profile: require('./assets/7.png'),
    price: 220,
    title: 'Seus amigos vão sair e te chamaram, quer ir?',
  },
  {
    id: 5,
    happiness: 28,
    profile: require('./assets/6.png'),
    price: 1000,
    title: 'Quer comprar um celular novo (lembrando que é um bem passivo)?',
  },
  {
    id: 6,
    happiness: 25,
    profile: require('./assets/5.png'),
    price: 90,
    title:
      'Sua caixinha de som está um pouco desatualizada, quer comprar uma nova (lembranco que é um bem passivo) ?',
  },
  {
    id: 7,
    happiness: 30,
    profile: require('./assets/4.png'),
    price: 900,
    title:
      'Você se interessou por uma área no mercado financeiro, deseja fazer um curso? Lembrando que educação é um ótimo investimento!',
  },
  {
    id: 8,
    happiness: 8,
    profile: require('./assets/3.png'),
    price: 105,
    title: 'Foi lançado um novo livro e seus amigos estão comprando, quer comprar?',
  },
  {
    id: 9,
    happiness: 20,
    profile: require('./assets/2.png'),
    price: 500,
    title:
      'Você está gostando cada vez mais de música, o que acha de comprar um instrumento musical (lembranco que é um bem passivo)?',
  },
  {
    id: 10,
    happiness: 15,
    profile: require('./assets/1.png'),
    price: 600,
    title: 'Idiomas são importantes no mercado profissional, deseja fazer um curso?',
  },
]

export const Swiping = () => {
  return <Cards {...{ cards }} />
}
