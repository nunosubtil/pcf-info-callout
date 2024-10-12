import * as React from 'react';
import { Label } from '@fluentui/react';

export type InfoCallout = {
  labelText: string;
  labelColor?: string;
  isBold?: boolean;
  isItalic?: boolean;
};

const InfoCallout = ({ labelText, isBold, isItalic, labelColor }: InfoCallout) => {
  return (
    <Label
      style={{
        fontWeight: isBold ? "bold" : "normal",
        fontStyle: isItalic ? "italic" : "normal",
        color: labelColor || "inherit",
      }}
    >
      {labelText}
    </Label>
  );
};

export default InfoCallout;
