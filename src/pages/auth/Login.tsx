import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import MCustomInput from '../../components/forms/MCustomInput';
import MCustomSubmit from '../../components/forms/MCustomSubmit';

const Login = () => {
    const [formData, setFormData] = useState({
      userName: "",
      password: ""
    });
    const [errMsg, setErrMsg] = useState(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    return (
      <section className="  min-h-screen moneypoint-blue-gradient  flex items-center justify-center">
        <form className=" text-center max-w-xl mx-auto">
          <h2 className=" text-white text-5xl font-medium">Login</h2>
          <p className=" text-white text-3xl mt-12 mb-20">Enter your details to login</p>
          <div className=" ">
            <MCustomInput
              name="userName"
              value={formData.userName}
              errorMsg={errMsg}
              placeholder="Input UserName"
              onChange={handleChange}
              label="Enter Username"
              ref={inputRef}
              type="text"
            />
               <MCustomInput
              name="password"
              value={formData.password}
              errorMsg={errMsg}
              placeholder="Enter Password"
              onChange={handleChange}
              label="Enter Password"
              ref={inputRef}
              type="password"
            />
            <div className=" mt-10"></div>
            <MCustomSubmit text="Login" />
          </div>
          <Link to="/" className=" text-white mt-5 flex items-center gap-x-2 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
            Return Home
          </Link>
        </form>
      </section>
    );
}

export default Login