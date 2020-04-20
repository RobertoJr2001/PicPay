import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
`;

export const BalanceContainer = styled.View`

`;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  fontSize: 14px;
  textAlign: center;
`;

export const Balance = styled.Text`
  color: #FFF;
  textAlign: center;
  fontSize: 20px;
  fontWeight: bold;
`;
