import styled from "styled-components/native";

type CheckboxProps = {
  active: boolean;
};

export const Container = styled.View`
  margin: 8px 0;
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled.TouchableOpacity<CheckboxProps>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border-width: 2px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  border-color: ${({ theme, active }) =>
    active ? theme.COLORS.blue_light : theme.COLORS.gray_4};
`;

export const CheckboxLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.gray_2};
`;
