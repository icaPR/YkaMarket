import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
  width: 112px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.gray_4};
  border-radius: 5px;
`;

export const DropdownList = styled.View`
  position: absolute;
  top: 40px;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.COLORS.gray_7};
  border-radius: 6px;
  z-index: 1;
`;

export const DropdownItem = styled.TouchableOpacity`
  padding: 10px;
`;

export const SlectText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.gray_2};
`;
