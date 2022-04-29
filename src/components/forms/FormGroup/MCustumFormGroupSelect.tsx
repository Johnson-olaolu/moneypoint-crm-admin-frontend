import React, { useEffect, useState } from "react";

interface IMCustumFormGroupSelect {
  data: { name: string; value: any }[];
  onSelect: (name: string, value: any) => void;
  name: string;
  value: any;
  placeholder: string;
  isRequired: boolean;
  errorMsg? : string 
}

const MCustumFormGroupSelect: React.FC<IMCustumFormGroupSelect> = (props) => {
  const { data, onSelect, name, value, placeholder, errorMsg, isRequired } = props;

  const [showDropDown, setShowDropDown] = useState(false)

  // const removeDropdown = (e : any) => {
  //   const dropDown = document.querySelector(".form-custom-select")
  //   if(e.target !== dropDown && dropDown?.contains(e.target) === false )
  //   setShowDropDown(false)
  // }
  // useEffect(() => {

  //   document.addEventListener("click", removeDropdown)
  
  //   return () => {
  //     document.removeEventListener("click", removeDropdown)
  //   }
  // }, [])
  

  const onChange = (selectedItem: { name: string; value: any }) => {
    onSelect(name, selectedItem.value);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown)
  };

  return (
    <div className="text-left">
      <div className="form-custom-select  rounded relative border-blue-200 border ">
        <div className=" flex justify-between p-4  bg-white items-center cursor-pointer overflow-hidden rounded" onClick={toggleDropdown}>
          <p className={value ? "text-sm text-gray-800" : " text-sm  text-gray-300"}>{value ? value : placeholder}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-moneypoint-blue"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className={ showDropDown ? " bg-white border-t border-blue-200 absolute top-auto w-full shadow custom-dropdown-div z-10" : "hidden"  }>
          <ul className="">
            <span
              className=" text-sm text-gray-300 py-2 px-4 hover:bg-blue-50 block cursor-pointer"
              onClick={() => {
                onChange({ name: "", value: "" });
              }}
            >
              {placeholder}
            </span>
            {data?.map((datapoint, index) => (
              <li
                key={index}
                onClick={() => {
                  onChange(datapoint);
                }}
                className="text-sm text-gray-600 py-2 px-4 hover:bg-blue-50 cursor-pointer"
              >
                {" "}
                {datapoint.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-xs mt-1 px-4">
        <span className=" text-gray-400  font-light"> {isRequired ? "(Required)" : "(Optional)"}</span>
        {errorMsg && <span>{errorMsg}</span>}
      </p>
    </div>
  );
};

export default MCustumFormGroupSelect;
