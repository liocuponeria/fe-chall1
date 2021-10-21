import { Radio } from "./style";

interface IRadioProps {
  radioValue: any;
  radioName: string;
}

export const RadioInput = ({ radioValue, radioName }: IRadioProps) => {
  return (
    <>
      <Radio>
        <label>
          <input type="radio" value={radioValue} name={radioName} />
          <span>{radioName}</span>
        </label>
      </Radio>
    </>
  );
};
