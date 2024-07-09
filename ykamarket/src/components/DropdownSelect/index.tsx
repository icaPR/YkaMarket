import { useState } from "react";
import {
  Button,
  Container,
  DropdownItem,
  DropdownList,
  SlectText,
} from "./styles";
import { CaretDown, CaretUp } from "phosphor-react-native";

type OptionProps = {
  label: string;
  value: string;
};

type DropdownSelectProps = {
  options: OptionProps[];
  onSelect: (option: OptionProps) => void;
};

export function DropdownSelect({ options, onSelect }: DropdownSelectProps) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionProps | null>(
    null
  );

  function handleSelect(option: OptionProps) {
    setSelectedOption(option);
    onSelect(option);
    setOpen(false);
  }

  return (
    <Container>
      <Button onPress={() => setOpen(!open)}>
        <SlectText>{selectedOption ? selectedOption.label : "Todos"}</SlectText>
        {open ? <CaretUp /> : <CaretDown />}
      </Button>
      {open && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem key={index} onPress={() => handleSelect(option)}>
              <SlectText>{option.label}</SlectText>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Container>
  );
}
