import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 45px;
  margin: 12px 0;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  background-color: ${({ theme }) => theme.COLORS.gray_7};
`;

export const Input = styled(TextInput)`
  flex: 1;
  height: 45px;
  border-radius: 6px;
  padding: 12px;
  background-color: ${({ theme }) => theme.COLORS.gray_7};
`;

export const TextError = styled.Text`
  margin-left: 4px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.red_light};
`;
