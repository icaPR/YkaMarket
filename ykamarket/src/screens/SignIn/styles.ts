import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImgLogo = styled.Image`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 48px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRABOLD};
  color: ${({ theme }) => theme.COLORS.gray_1};
`;

export const Subtitle = styled.Text`
  margin-bottom: 32px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.LIGHT};
  color: ${({ theme }) => theme.COLORS.gray_3};
`;

export const Label = styled.Text`
  margin: 8px 0;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.gray_2};
`;

export const Content = styled.View`
  padding: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.gray_6};
`;

export const Footer = styled.View`
  height: 20%;
  padding: 48px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.gray_7};
`;
