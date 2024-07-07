import React, { useState } from "react";
import { SwitchButton, SwitchContainer, SwitchDot } from "./styles";

type SwitchToggleProps = {
  value: boolean | null;
  onToggle: (value: boolean) => void;
};

export function SwitchToggle({ value = false, onToggle }: SwitchToggleProps) {
  function toggleSwitch() {
    onToggle(!value);
  }

  return (
    <SwitchContainer>
      <SwitchButton active={value} onPress={toggleSwitch}>
        <SwitchDot active={value} />
      </SwitchButton>
    </SwitchContainer>
  );
}
