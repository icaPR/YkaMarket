import styled from "styled-components/native";

export const Container = styled.View`
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconViewLeft = styled.View`
  position: absolute;
  left: 0;
`;

export const IconViewRight = styled.View`
  position: absolute;
  right: 20;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.gray_1};
`;
