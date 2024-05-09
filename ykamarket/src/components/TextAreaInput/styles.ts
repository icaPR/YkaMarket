import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 150px;
  padding: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.gray_7};
`;

export const Input = styled(TextInput)`
  vertical-align: top;
  color: ${({ theme }) => theme.COLORS.gray_2};
`;

export const TextError = styled.Text`
  margin-left: 4px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.red_light};
`;
