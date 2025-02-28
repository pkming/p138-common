import { Check } from '@tamagui/lucide-icons';
import React from 'react';
import { Checkbox, CheckboxProps, Label, XStack } from 'tamagui';


export function CheckboxWithLabel({
    size,
    label = 'Accept terms and conditions',
    ...checkboxProps
  }: CheckboxProps & { label?: string }) {
    const id = `checkbox-${(label || '').toString().slice(1)}`
    return (
      <XStack width={300} alignItems="center" gap="$4">
        <Checkbox id={id} size={size} {...checkboxProps}>
          <Checkbox.Indicator>
            <Check />
          </Checkbox.Indicator>
        </Checkbox>
  
        <Label size={size} htmlFor={id}>
          {label}
        </Label>
      </XStack>
    )
  }
export default CheckboxWithLabel;
