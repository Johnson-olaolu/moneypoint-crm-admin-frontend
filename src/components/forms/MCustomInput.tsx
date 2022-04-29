import React from "react";
interface IMCustomInput {
  label: string;
  ref: React.Ref<HTMLInputElement>;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  errorMsg?: string | null;
  type : string
}

const MCustomInput: React.FC<IMCustomInput> = React.forwardRef((props, ref) => {
  const { label, errorMsg, value, name, placeholder, onChange , type} = props;
  return (
    <div className=" text-left mt-5">
      {/* error message */}
      {errorMsg && <span className="pb-2 text-moneypoint-red text-sm px-4">{errorMsg}</span>}
      <div className=" pt-2 pb-4 px-4 bg-white rounded">
        <label htmlFor="mcustumInput" className=" text-sm text-money-point-alt-blue mb-2">
          {label}
        </label>
        <input
          type={type}
          className="w-full border-l border-money-point-alt-blue pl-1 placeholder:font-light text-2xl focus-visible:outline-0 
 	placeholder:text-gray-200 text-gray-800 "
          ref={ref}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
});

export default MCustomInput;
