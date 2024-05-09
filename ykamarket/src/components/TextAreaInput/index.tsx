import { useTheme } from "styled-components/native";
import { Container, Input, TextError } from "./styles";
import { TextInputProps } from "react-native";

type InputProps = TextInputProps & {
  errorMessage?: string;
};

export function TextAreaInput({ errorMessage, ...rest }: InputProps) {
  const { COLORS } = useTheme();
  return (
    <Container>
      <Input
        selectionColor={COLORS.gray_2}
        placeholderTextColor={COLORS.gray_4}
        multiline
        {...rest}
      />
      {errorMessage && <TextError>{errorMessage}</TextError>}
    </Container>
  );
}
