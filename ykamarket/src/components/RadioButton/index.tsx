import { useState } from "react";
import { Button, Container, Label } from "./styles";
import { Circle } from "phosphor-react-native";
import { useTheme } from "styled-components";

type RadioButtonProps = {
  options: string[];
  onSelect: (option: string) => void;
};

export function RadioButton({ options, onSelect }: RadioButtonProps) {
  const { COLORS } = useTheme();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  function handleSelect(option: string) {
    setSelectedOption(option);
    onSelect(option);
  }

  return (
    <Container>
      {options.map((option, index) => (
        <>
          <Button
            key={index}
            onPress={() => handleSelect(option)}
            active={selectedOption === option}
          >
            {selectedOption === option && (
              <Circle size={18} color={COLORS.blue_light} weight="fill" />
            )}
          </Button>
          <Label>{option}</Label>
        </>
      ))}
    </Container>
  );
}
