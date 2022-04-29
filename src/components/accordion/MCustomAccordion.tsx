import React from "react";

const MCustomAccordion = () => {
	const showDropdown = (e : React.MouseEvent<HTMLDivElement>) => {
		const nextDiv = e.currentTarget.nextElementSibling
		if(e.currentTarget.classList.contains("body-hidden")) {
			nextDiv?.classList.remove("hidden")
			e.currentTarget.classList.remove("body-hidden")
		}else {
			nextDiv?.classList.add("hidden")
			e.currentTarget.classList.add("body-hidden")
		}
	}

  return (
    <div className="accordion text-left">
      <div className="accordion-wrapper bg-white shadow-md rounded-md p-4">
        <div className="accordion-title flex justify-between items-center cursor-pointer body-hidden" 
		onClick={showDropdown}>
          <h4 className=" flex items-center text-gray-800 font-medium">
            <svg className=" mr-4" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="3" cy="3" r="3" fill="#0361F0" />
            </svg>
            Technical issues FAQs
          </h4>
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
        <div className="accordion-body px-8 mt-4 hidden">
          <div className=" accordion-subtitle">
            <div className="accordion-subtitle-title flex justify-between items-center bg-blue-200 px-4 py-3 rounded-md cursor-pointer body-hidden"
			onClick={showDropdown}>
              <h5 className=" flex items-center text-gray-800 font-medium ">Withdrawal and Payments</h5>
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
            <div className="accordion-subtitle-body pl-4 py-4 hidden">
              <h6 className=" text-sm text-gray-800 ">How long does it take for me to receive payment?</h6>
              <p className="mt-5 text-sm font-light text-gray-600">
                Sending funds from Moniepoint to your debit or prepaid card takes about 30 minutes. There is a $0.25 fee for this service, though
                additional currency conversion rates may apply when withdrawing from another currency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCustomAccordion;
