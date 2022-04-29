import React from "react";

interface IMCustomFormGroupFileUpload {
  isRequired: boolean;
  name: string;
  errorMsg? : string
}

const MCustomFormGroupFileUpload : React.FC<IMCustomFormGroupFileUpload> = ( props) => {
  const { name, isRequired, errorMsg} = props
  return (
    <div className=" text-left">
      <div className=" w-100 h-24 rounded border border-blue-200 bg-white flex items-center justify-center">
        <div className=" text-center">
          <svg className=" mx-auto" width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.9175 13.7799L12.821 26.0994C11.7051 27.2358 10.1834 27.8825 8.59075 27.897C6.99809 27.9115 5.46489 27.2928 4.32843 26.1769C3.19198 25.061 2.54535 23.5393 2.53082 21.9467C2.51628 20.354 3.13502 18.8208 4.25092 17.6844L17.3994 4.29368C18.0968 3.5834 19.0478 3.17926 20.0433 3.17017C21.0387 3.16109 21.9969 3.5478 22.7072 4.24524C23.4175 4.94267 23.8216 5.89371 23.8307 6.88912C23.8398 7.88453 23.4531 8.84278 22.7557 9.55306L11.7109 20.8012C11.432 21.0854 11.0516 21.247 10.6534 21.2506C10.2552 21.2543 9.87193 21.0996 9.58782 20.8206C9.3037 20.5416 9.14205 20.1612 9.13841 19.7631C9.13478 19.3649 9.28946 18.9816 9.56844 18.6975L19.5613 8.52057L17.9544 6.94275L7.96155 17.1197C7.26412 17.83 6.87741 18.7882 6.88649 19.7836C6.89558 20.779 7.29971 21.7301 8.01 22.4275C8.72029 23.1249 9.67854 23.5117 10.6739 23.5026C11.6694 23.4935 12.6204 23.0893 13.3178 22.3791L24.3625 11.1309C25.4784 9.99442 26.0972 8.46122 26.0826 6.86856C26.0681 5.27591 25.4215 3.75425 24.285 2.63835C23.1486 1.52245 21.6154 0.903714 20.0227 0.91825C18.43 0.932787 16.9084 1.57941 15.7925 2.71587L2.64404 16.1066C1.10967 17.6692 0.258907 19.7773 0.278894 21.9672C0.298882 24.1571 1.18799 26.2494 2.75062 27.7838C4.31325 29.3181 6.4214 30.1689 8.6113 30.1489C10.8012 30.1289 12.8935 29.2398 14.4278 27.6772L26.5244 15.3578L24.9175 13.7799Z"
              fill="#B4CBD5"
            />
          </svg>
          <span className=" font-medium text-moneypoint-blue text-sm mt-2">Attach a file</span>
        </div>
      </div>
      <p className=" text-xs mt-1 px-4">
        <span className=" text-gray-400  font-light"> {isRequired ? "(Required)" : "(Optional)"}</span>
        {errorMsg && <span>{errorMsg}</span>}
      </p>
    </div>
  );
};

export default MCustomFormGroupFileUpload;
