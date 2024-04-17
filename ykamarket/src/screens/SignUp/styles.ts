import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_6};
`;

export const Intro = styled.View`
  padding: 0 48px;
  margin-top: 48px;
  justify-content: center;
  align-items: center;
`;

export const ProfileView = styled.View`
  position: relative;
`;

export const EditProfileIcon = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 38px;
  height: 38px;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.COLORS.blue_light};
`;

export const FormContainer = styled.View`
  padding: 48px;
  justify-content: center;
  align-items: center;
`;

export const ImgLogo = styled.Image`
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.gray_1};
`;

export const TextMessage = styled.Text`
  text-align: center;
  margin-top: 18px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.gray_2};
`;

export const TextError = styled.Text`
  margin-left: 4px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.red_light};
`;
