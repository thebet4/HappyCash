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
export const CardContainer = styled.View`
  margin-top: 32px;
  width: 80%;
  border-radius: 24px;
  border-width: 1px;
  align-self: center;
`
export const CardImage = styled.Image`
  width: 100%;
  height: 300px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`
export const CardTitle = styled(RegularText)`
  font-size: 24px;
  line-height: 29.05px;
  text-align: center;
  padding-top: 22px;
  border-top-width: 1px;
  width: 100%;
  color: ${Colors.Base.Darkest};
`
export const CardInfos = styled(RegularText)`
  font-size: 12px;
  line-height: 14.52px;
  color: ${Colors.Base.Darkest};
  margin-left: 32px;
  margin-right: 32px;
`
export const ChoiceButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 32px;
`

export const ChoiceButton = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  border-radius: 64px;
  background-color: ${Colors.Primary.Red};
`
