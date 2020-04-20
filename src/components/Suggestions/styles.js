import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  }
}))`
  background: #1e222b;
  height: 130;
`;

export const Option = styled.TouchableOpacity`
  width: 80;
  marginRight: 16;
  alignItems: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
  color: #fff;
  fontWeight: bold;
  marginTop: 8;
  fontSize: 14;
`;
