import Colors from '@theme/Colors'
import { BoldText, RegularText } from '@theme/Fonts'
import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.Primary.Background};
`

export const Container = styled.ScrollView`
  padding: 0px 20px;
`

export const Title = styled(BoldText)`
  color: ${Colors.Base.Darkest};
  align-self: center;
  font-size: 32px;
  margin-top: 32px
  margin-bottom: 48px
`
export const Subtitle = styled(BoldText)`
  color: ${Colors.Base.Darkest};
  align-self: center;
  font-size: 24px;
  margin-top: 12px
  margin-bottom: 12px
`

export const Paragraph = styled(RegularText)`
  color: ${Colors.Base.Darkest};
  font-size: 16px;
  margin-bottom: 8px;
`

export const LinkText = styled(RegularText)`
  color: #0000ff;
  font-size: 16px;
  margin-bottom: 8px;
  text-decoration-line: underline;
`
