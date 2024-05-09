import styled from "styled-components/native";

type ButtonProps = {
  active?: boolean | null;
};

export const Container = styled.View`
  margin: 16px 0;
  flex-direction: row;
  align-items: center;
`;
export const Button = styled.TouchableOpacity<ButtonProps>`
  height: 24px;
  width: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 2px;
  border-color: ${({ theme, active }) =>
    active ? theme.COLORS.blue_light : theme.COLORS.gray_4};
`;

export const Label = styled.Text`
  margin: 0 16px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.gray_2};
`;
