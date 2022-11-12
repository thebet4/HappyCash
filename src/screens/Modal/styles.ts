import Colors from '@theme/Colors'
import { BoldText, RegularText } from '@theme/Fonts'
import styled from 'styled-components/native'

interface ButtonProps {
  isALose: boolean
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.Primary.Background};
  align-items: center;
`

export const Title = styled(BoldText)`
  color: ${Colors.Base.Darkest};
  align-self: center;
  font-size: 32px;
  margin-top: 32px
  margin-bottom: 48px
`
export const Description = styled(RegularText)`
  color: ${Colors.Base.Darkest};
  margin-top: 132px;
  width: 80%;
  text-align: center;
`
export const Caption = styled(BoldText)`
  color: ${Colors.Base.Lightest};
`

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 80%;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => (props.isALose ? Colors.Primary.Red : Colors.Primary.Green)};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 128px;
`
