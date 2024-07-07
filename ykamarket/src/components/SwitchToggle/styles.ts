import styled from "styled-components/native";

type SwiychProps = {
  active: boolean | null;
};

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SwitchButton = styled.TouchableOpacity<SwiychProps>`
  margin: 8px 0;
  width: 50px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ active, theme }) =>
    active ? theme.COLORS.blue_light : theme.COLORS.gray_5};
`;

export const SwitchDot = styled.View<SwiychProps>`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: ${({ active }) => (active ? "22px" : "2px")};
`;
