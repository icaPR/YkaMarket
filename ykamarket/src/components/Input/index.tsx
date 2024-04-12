import { useTheme } from "styled-components/native";
import { Button, Container, Content, Input, TextError } from "./styles";
import { TextInputProps } from "react-native";
import { Eye, EyeSlash } from "phosphor-react-native";
import { useState } from "react";

type InputProps = TextInputProps & {
  secretText?: boolean;
  errorMessage?: string;
};

export function InputComponent({
  secretText = false,
  errorMessage,
  ...rest
}: InputProps) {
  const [toggleSecureTextEntry, setToggleSecureTextEntry] =
    useState(secretText);
  const { COLORS } = useTheme();

  function toggleSecureEntry() {
    setToggleSecureTextEntry(!toggleSecureTextEntry);
    console.log(!toggleSecureTextEntry);
  }

  return (
    <Container>
      <Content>
        <Input
          selectionColor={COLORS.gray_2}
          placeholderTextColor={COLORS.gray_4}
          secureTextEntry={toggleSecureTextEntry}
          {...rest}
        />
        {secretText && (
          <Button onPress={toggleSecureEntry}>
            {toggleSecureTextEntry ? (
              <EyeSlash size={24} color={COLORS.gray_2} />
            ) : (
              <Eye size={24} color={COLORS.gray_2} />
            )}
          </Button>
        )}
      </Content>
      {errorMessage && <TextError>{errorMessage}</TextError>}
    </Container>
  );
}
