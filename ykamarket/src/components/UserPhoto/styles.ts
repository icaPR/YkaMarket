import styled from "styled-components/native";
import { ImageProps } from "react-native";

export type ImagePropsComponent = ImageProps & {
  size?: number;
};

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.Image<ImagePropsComponent>`
  border-width: 4px;
  border-color: ${({ theme }) => theme.COLORS.blue_light};
  border-radius: 99px;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
`;
