import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const larguraTela = Dimensions.get("window").width;

export const Container = styled.View`
  width: 100%;
`;

export const Imagem = styled.Image`
  width: larguraTela;
  height: 280px;
`;
