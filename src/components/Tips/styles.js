import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  },
}))`
    marginTop: 25;
`;

export const Option = styled.TouchableOpacity`
  background: ${({ bgColor }) => bgColor};
  width: 150;
  height: 200;
  borderRadius: 8;
  padding: 15;
  justifyContent: space-between;
  marginRight: 16;
`;

export const Title = styled.Text`
  color: #fff;
  fontSize: 16;
  fontWeight: bold;
`;

export const Img = styled.Image`
  alignSelf: center;
`;