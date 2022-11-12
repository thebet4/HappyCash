import { Feather as Icon } from '@expo/vector-icons'
import { MainStackNavigatorParamsList } from '@navigation/types'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import Colors from '@theme/Colors'
import { RegularText } from '@theme/Fonts'
import React, { useCallback, useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'

import type { CardModel } from './AnimatedCard'
import type { SwipeHandler } from './Swipeable'
import { Swipeable } from './Swipeable'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary.Background,
    justifyContent: 'space-evenly',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 32,
  },
  cards: {
    flex: 1,
    marginHorizontal: 16,
    zIndex: 100,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 16,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 2,
  },
})

interface CardProps {
  cards: CardModel[]
}

export const Cards = ({ cards: defaultCards }: CardProps) => {
  const allowance = 200
  const topCard = useRef<SwipeHandler>(null)
  const scale = useSharedValue(0)
  const [cards, setCards] = useState(defaultCards)
  const [amount, setAmount] = useState(allowance)
  const [happiness, setHappiness] = useState(100)

  const navigation = useNavigation<NavigationProp<MainStackNavigatorParamsList>>()

  const onSwipe = useCallback(() => {
    setCards(cards.slice(0, cards.length - 1))
  }, [cards])

  const onLose = () => {
    navigation.navigate('ModalScreen', {
      title: 'Você perdeu!',
      description: 'Você perdeu, mas não desista, volte ao tutorial e tente novamente!',
      buttonText: 'Tentar novamente',
      isALose: true,
    })
  }

  const onWin = () => {
    if (amount < 600) {
      navigation.navigate('ModalScreen', {
        title: 'Você Pedeu!',
        description:
          'Ao final dos 10 meses você não atingiu o objetivo de 600 reais, mas não desista, volte ao tutorial e tente novamente!',
        buttonText: 'Tentar novamente',
        isALose: true,
      })
      return
    }

    if (happiness < 30) {
      navigation.navigate('ModalScreen', {
        title: 'Você Pedeu!',
        description:
          'Ao final dos 10 meses você atingiu o objetivo de 600 reais, mas está infeliz, não desista, volte ao tutorial e tente novamente!',
        buttonText: 'Tentar novamente',
        isALose: true,
      })
      return
    }

    navigation.navigate('ModalScreen', {
      title: 'Você ganhou!',
      description: 'Você ganhou, parabéns!, continue buscando conhecimento e evoluindo!',
      buttonText: 'Tentar novamente',
      isALose: false,
    })
  }

  const onAccept = (card: CardModel) => {
    const amountResult = amount - card.price
    if (amountResult < 0) onLose()
    setAmount(amount - card.price + allowance)

    if (happiness + card.happiness > 100) {
      setHappiness(100)
    } else {
      setHappiness(happiness + card.happiness)
    }
  }

  const onReject = (card: CardModel) => {
    if (happiness - card.happiness <= 0) onLose()

    setAmount(amount + allowance)
    setHappiness(happiness - card.happiness)
  }

  const getHappinessIcon = () => {
    if (happiness < 30) {
      return 'frown'
    } else if (happiness < 70) {
      return 'meh'
    } else {
      return 'smile'
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <RegularText style={{ color: '#000' }}>R${amount}</RegularText>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RegularText style={{ color: '#000', marginRight: 8, lineHeight: 24 }}>
            {happiness}%
          </RegularText>
          <Icon name={getHappinessIcon()} size={24} />
        </View>
      </View>
      <View style={styles.cards}>
        {cards.map((card, index) => {
          const onTop = index === cards.length - 1
          const ref = onTop ? topCard : null
          return (
            <Swipeable
              ref={ref}
              card={card}
              scale={scale}
              onSwipe={onSwipe}
              onTop={onTop}
              key={card.id}
            />
          )
        })}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => {
            if (cards.length - 1 === 0) onWin()
            let selectedCard = cards[cards.length - 1]
            onReject(selectedCard)
            topCard.current?.swipeLeft()
          }}
        >
          <Icon name='thumbs-down' size={32} color='#ec5288' />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => {
            if (cards.length - 1 === 0) onWin()
            let selectedCard = cards[cards.length - 1]
            onAccept(selectedCard)
            topCard.current?.swipeRight()
          }}
        >
          <Icon name='thumbs-up' size={32} color='#6ee3b4' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
