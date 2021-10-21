import { Radio } from "./style";

interface IRadioProps {
  radioValue: any;
  radioName: string;
  onChange: any
}

export const RadioInput = ({ radioValue, radioName, onChange }: IRadioProps) => {
  return (
    <>
      <Radio>
        <label>
          <input type="radio" value={radioValue} name={radioName} onChange={onChange} />
          <span>{radioValue}</span>
        </label>
      </Radio>
    </>
  );
};
