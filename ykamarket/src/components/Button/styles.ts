import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

type ColorProps = {
  color: "BLUE" | "DARK" | undefined;
};

export type ButtonProps = TouchableOpacityProps & ColorProps;

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  flex-direction: row;
  height: 45px;
  margin: 16px 0;
  border-radius: 6px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, color }) =>
    color === "BLUE"
      ? theme.COLORS.blue_light
      : color === "DARK"
      ? theme.COLORS.gray_1
      : theme.COLORS.gray_5};
`;

export const Text = styled.Text<ColorProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme, color }) =>
    color === "BLUE" || color === "DARK"
      ? theme.COLORS.gray_7
      : theme.COLORS.gray_2};
`;
