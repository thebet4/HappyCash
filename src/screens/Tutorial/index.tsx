import React from 'react'
import { Linking, TouchableOpacity } from 'react-native'

import { Container, LinkText, Paragraph, Subtitle, Title, Wrapper } from './styles'

const TutorialScreen = () => {
  const links = [
    {
      lable: 'Reserva de Emergência',
      link: 'https://www.infomoney.com.br/guias/reserva-de-emergencia/',
    },
    {
      lable: 'Juros',
      link: 'https://www.infomoney.com.br/guias/taxa-de-juros/',
    },
    {
      lable: 'Selic',
      link: 'https://www.infomoney.com.br/guias/taxa-selic',
    },
    {
      lable: 'Bens passivos e ativos',
      link: 'https://www.infomoney.com.br/onde-investir/saber-diferenciar-ativo-e-passivo-ajuda-a-enriquecer-diz-autor-de-best-seller/',
    },
    {
      lable: 'Renda passiva e ativa',
      link: 'https://www.infomoney.com.br/guias/renda-passiva/#:~:text=A%20renda%20ativa%20e%20a,da%20remunera%C3%A7%C3%A3o%20da%20sua%20atividade',
    },
  ]

  const contents = [
    {
      lable: 'https://www.educamaisbrasil.com.br/enem/educacao-financeira',
      link: 'https://www.educamaisbrasil.com.br/enem/educacao-financeira',
    },
    {
      lable: 'https://www.infomoney.com.br/tudo-sobre/educacao-financeira/',
      link: 'https://www.infomoney.com.br/tudo-sobre/educacao-financeira/',
    },
  ]

  return (
    <Wrapper>
      <Container>
        <Title>Tutorial</Title>
        <Subtitle>Qual o objetivo do jogo?</Subtitle>
        <Paragraph>
          O objetivo do HAPPYCASH, consiste em incentivar jovens e adolescentes a se inteirarem mais
          sobre educação financeira, assunto esse que é totalmente importante e muito pouco
          trabalhado nas escolas.
        </Paragraph>
        <Subtitle>Como jogar?</Subtitle>
        <Paragraph>
          O jogo é bem intuitivo e interativo, ele visa justamente as ações do usuário para que o
          mesmo seja incentivado a entender mais sobre educação financeira.
        </Paragraph>
        <Paragraph>
          O jogo trabalha com um objetivo principal, sendo esse a obtenção de uma reserva de
          emergência.
        </Paragraph>
        <Paragraph>
          Através disso, o jogo possui cards interativos com determinadas situações de compras
          presentes no dia a dia da população, na qual o usuário pode optar ou não pela compra da
          situação que lhe é mostrada, o que influencia diretamente nos seus níveis de felicidade e
          de dinheiro. A princípio, o HAPPYCASH resolveu determinar que o jogador receberá uma
          mesada de R$250 por mês para que possa trabalhar e controlar seu dinheiro.
        </Paragraph>
        <Paragraph>
          Vale ressaltar, que a cada Card é equivalente a 1 mês, ou seja, a cada card que é passado
          o usuário irá receber R$250, e como para se ter uma reserva de emergência é necessário que
          se tenha uma estipulação dos gastos mensais e um prazo definido, atribui-se ao usuário um
          gasto mensal de R$50,00(Que já será descontado no valor da mesada), e um prazo de 12
          meses.
        </Paragraph>
        <Paragraph>
          Logo para ganhar o jogo o usuário deverá ter uma reserva de emergência de R$600,00, e uma
          felicidade maior que 30% ao final dos 10 meses, caso contrário o usuário perderá o jogo.
        </Paragraph>
        <Paragraph>
          Para que se tenha um melhor connhecimento sobre do que se trata a reserva de emergiência e
          outros assuntos relacionados a educação financeira, basta clicar nos links abaixo:
        </Paragraph>
        <Subtitle>Conceitos importantes:</Subtitle>
        {links.map((link) => {
          return (
            <TouchableOpacity key={link.link} onPress={() => Linking.openURL(link.link)}>
              <LinkText>{link.lable}</LinkText>
            </TouchableOpacity>
          )
        })}

        <Subtitle>Indicação de conteúdo:</Subtitle>
        {contents.map((link) => {
          return (
            <TouchableOpacity key={link.link} onPress={() => Linking.openURL(link.link)}>
              <LinkText>{link.lable}</LinkText>
            </TouchableOpacity>
          )
        })}
        <Subtitle>Como surgiu o HAPPYCASH?</Subtitle>
        <Paragraph>
          O HAPPYCASH surgiu através de um trabalho de conclusão de curso feito pelos alunos Gabriel
          Valias e Vinícius Barros, onde objetiva principalmente o incentivo a aprendizagem de
          educação financeira por parte de jovens e adolescentes. Determinado objetivo se deu devido
          a descoberta através de pesquisas e buscas sobre a falta de conhecimento de educação
          financeira por parte da população brasileira, e escassez desse tipo de conteúdo nas
          escolas, que em sua maioria não empregam esse tipo de ensino aos seus
        </Paragraph>
      </Container>
    </Wrapper>
  )
}

export default TutorialScreen
