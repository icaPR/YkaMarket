import { useState } from "react";
import { Checkbox, CheckboxLabel, Container } from "./styles";
import { Check, Circle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { PaymentProps } from "../../screens/NewAnnouncement";

type CheckboxProps = {
  title: string;
  label: PaymentProps;
  onToggle: (label: PaymentProps) => void;
};

export function CheckBox({ title, label, onToggle }: CheckboxProps) {
  const { COLORS } = useTheme();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function toggleCheckbox() {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onToggle(label);
  }

  return (
    <Container>
      <Checkbox onPress={toggleCheckbox} active={isChecked}>
        {isChecked && (
          <Check size={30} color={COLORS.blue_light} weight="fill" />
        )}
      </Checkbox>
      <CheckboxLabel>{title}</CheckboxLabel>
    </Container>
  );
}
