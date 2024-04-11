import { ButtonProps, TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  color?: "BLUE" | "DARK" | undefined;
};

export function Button({ title, color = undefined, ...rest }: Props) {
  return (
    <Container color={color} activeOpacity={0.7} {...rest}>
      <Text color={color}>{title}</Text>
    </Container>
  );
}
