import Colors from '@theme/Colors'
import { LightText, RegularText } from '@theme/Fonts'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  background-color: ${Colors.Primary.Background};
`
export const HeaderContainer = styled.View`
  height: 88px;
  border-bottom-width: 1px;
  border-color: ${Colors.Base.Darkest};
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`
export const AmountText = styled(LightText)`
  font-size: 36px;
  line-height: 48px;
  color: ${Colors.Base.Darkest};
`
export const HappinessText = styled(LightText)`
  font-size: 24px;
  line-height: 28px;
  color: ${Colors.Base.Darkest};
`
export const GameContent = styled.View`
  width: 100%;
`
