import React from "react";
import InputMask from "react-input-mask";
import TextField from "../TextField/TextField";
import { OutlinedTextFieldProps } from "@material-ui/core";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFIeldMask: React.FC<TextFieldMaskProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {/*Define o que deve ser inscrito no input*/}
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFIeldMask;
