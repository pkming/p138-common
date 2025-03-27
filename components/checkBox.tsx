import { Check } from "@tamagui/lucide-icons";
import React from "react";
import {
  Checkbox,
  CheckboxProps,
  Label,
  RadioGroup,
  SizeTokens,
  XStack,
} from "tamagui";

export function CheckboxWithLabel({
  size,
  width=300,
  label = "Accept terms and conditions",
  ...checkboxProps
}: CheckboxProps & { label?: string; width?: number }) {
  const id = `checkbox-${(label || "").toString().slice(1)}`;
  return (
    <XStack width={width} alignItems="center" gap="$4">
      <Checkbox id={id} size={size} {...checkboxProps}>
        <Checkbox.Indicator>
          <Check />
        </Checkbox.Indicator>
      </Checkbox>

      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
}
export function RadioGroupItemWithLabel(props: {
  size: SizeTokens;
  value: string;
  label: string;
}) {
  const id = `radiogroup-${props.value}`;
  return (
    <XStack width={100} alignItems="center" space="$4">
      <RadioGroup.Item value={props.value} id={id} size={props.size}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label size={props.size} htmlFor={id}>
        {props.label}
      </Label>
    </XStack>
  );
}

export default {CheckboxWithLabel, RadioGroupItemWithLabel};
