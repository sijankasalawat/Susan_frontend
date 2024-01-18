import React, {useState} from "react";
import "./Login.css";
import Sliders from "../component/Slider";
import Sec from "../../assets/images/Sec.png";
import { loginApi } from "../../Apis/Api";
import { toast } from "react-toastify";
import {Link, useNavigate} from "react-router-dom";


const Login = () => {
  const navigate = useNavigate(); 
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(email,password);
    const data = {
      email:email,
      password:password
    }
    loginApi(data).then((res)=> {
      if(res.data.success == true){
        toast.success(res.data.message)
    
        localStorage.setItem("token", res.data.token)
        //convarting incomming json
        const convertedJson =JSON.stringify(res.data.userData)
        localStorage.setItem("user",convertedJson)
        navigate("/dashboard");
      }else{
        toast.error(res.data.message)
        
      }
    }).catch((err)=>{
      console.log(err)
      toast.error("Internal server error")
    })

  
  }



  return (
    <>
    <div className="bg-gray-100">
      <div className="login-page container mx-auto  h-100">
        <div className="w-full  grid grid-cols-1  xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1  ">
          <div className="left-container  col-span-2 xl:block md:block sm:hidden hidden">
            <img src={Sec} alt="background image " className="p-2 rounded-md pt-3"/>
          </div>
          <div className="right-container p-3  ">
            <div className="change-image">
              <Sliders />
            </div>
            <h1 className="text-grey-500 lg:text-[24px] sm:text[18px] mb-4 font-large pt-2">Login</h1>

            <input onChange={handleEmail}
              placeholder="enter you email"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-5 mb-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
            <input onChange={handlePassword}
              placeholder="enter you password"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-5 mb-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
            <button onClick={handelSubmit} className="bg-sky-400 w-full rounded-md border-0 py-1.5 pl-5 pr-5 mb-2  hover:bg-sky-600 text-white ">Login</button>
            <h2 className="text-right text-sky-500 hover:text-sky-400">Forget Password ?</h2>
            <h2 className="pt-4">Don’t have an account? <Link to="/register" className="text-sky-500 hover:text-sky-400">Sign Up</Link></h2>

          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
