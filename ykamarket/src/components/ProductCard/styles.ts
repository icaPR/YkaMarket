import styled from "styled-components/native";

type TagProps = {
  active: boolean;
};
type HeaderProps = {
  withAvatar: boolean;
};

export const Container = styled.TouchableOpacity`
  width: 48%;
  height: 150px;
  margin: 14px 0;
  border-radius: 6px;
`;

export const HeaderCard = styled.View<HeaderProps>`
  flex-direction: row;
  z-index: 1;
  width: 100%;
  justify-content: ${({ withAvatar }) =>
    withAvatar ? "space-between" : "flex-end"};
  position: absolute;
  padding: 4px;
`;

export const Avatar = styled.Image`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.gray_7};
`;

export const Tag = styled.View<TagProps>`
  height: 18px;
  border-radius: 99px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, active }) =>
    active ? theme.COLORS.blue : theme.COLORS.gray_2};
`;

export const Tagtext = styled.Text`
  margin: 0 8px;
  font-size: ${({ theme }) => theme.FONT_SIZE.XXS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.gray_7};
`;

export const ImageProduct = styled.Image`
  flex: 1;
  border-radius: 6px;
`;

export const TextView = styled.View``;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.gray_2};
`;

export const PriceView = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Currency = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.gray_1};
`;

export const Price = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.gray_1};
`;
