import React from "react";
import "../components/login.css";
import login from "../assets/avatar.jpg";
import { AiOutlineMail,AiOutlinePhone } from "react-icons/ai";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {GoPerson} from "react-icons/go"
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { useState } from "react";
import { VscEye, VscEyeClosed,VscPerson } from "react-icons/vsc";

const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);

  function togglePasswordVisibility2() {
    setIsPasswordVisible2((prevState) => !prevState);
  }

  // const loadFile = (e) => {
  //   const input = event.target;
  //   const file = input.files[0];
  //   const type = file.type;

  //   const output = document.getElementById("preview_img");

  //   output.src = URL.createObjectURL(event.target.files[0]);
  //   output.onload = () => {
  //     URL.revokeObjectURL(output.src);
  //   };
  // };

  return (
    <div className=" bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/816e3b86128681.5d909dad46bf1.jpg)] h-screen bg-cover bg-no-repeat">
      <div className=" bg-black h-screen bg-opacity-30">
        <div className=" flex justify-center items-center h-full  ">
          <div className=" backdrop-blur-sm bg-white/10 w-fit h-fit rounded login-background flex gap-5">
            <div className=" rounded-s w-[150px] text-center bg-[url(https://i.pinimg.com/564x/d1/47/43/d14743aacf65bee7bfd6b9d4d310f74d.jpg)] bg-cover bg-no-repeat bg-opacity-25 right-side">
              <div className=" bg-purple-300 h-full bg-opacity-30 rounded-s">
                <h2 className=" flex justify-center items-center h-full font-bold text-xl italic font-serif text-white cursor-pointer">
                  Welcome To Music-Store
                </h2>
              </div>
            </div>
            <form className=" flex flex-col items-center px-5 py-10">
              {/* image input section  */}
              <div>
                <img
                  id="preview_img"
                  src={login}
                  alt=""
                  className=" w-16 rounded-full opacity-90"
                />
                {/* <label class="block">
                  <span class="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    onchange="loadFile(e)"
                    class="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
                  />
                </label> */}
              </div>
              <div className=" pt-5 text-white flex flex-col gap-5">
                {/* name section  */}
                <div className=" flex flex-col md:flex-row gap-5">
                  <div className=" flex items-center gap-3 px-3 py-1  ">
                    <h2 className=" text-xl">
                      <GoPerson />
                    </h2>
                    <input
                      type="text"
                      className=" text-center border-b border-[#ffffff9f] bg-transparent outline-none focus:outline-none focus:border-b-[#fff67ce1] placeholder-slate-100 focus:placeholder-gray-500"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className=" flex items-center gap-3 px-3 py-1  ">
                    <h2 className=" text-xl">
                      <VscPerson />
                    </h2>
                    <input
                      type="text"
                      className=" text-center border-b border-[#ffffff9f] bg-transparent outline-none focus:outline-none focus:border-b-[#fff67ce1] placeholder-slate-100 focus:placeholder-gray-500"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                {/* email and phone section  */}
                <div className=" flex flex-col md:flex-row gap-5">
                  <div className=" flex items-center gap-3 px-3 py-1  ">
                    <h2 className=" text-xl">
                      <AiOutlineMail />
                    </h2>
                    <input
                      type="email"
                      className=" text-center border-b border-[#ffffff9f] bg-transparent outline-none focus:outline-none focus:border-b-[#fff67ce1] placeholder-slate-100 focus:placeholder-gray-500"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className=" flex items-center gap-3 px-3 py-1  ">
                    <h2 className=" text-xl">
                      <AiOutlinePhone />
                    </h2>
                    <input
                      type="tel"
                      className=" text-center text-white border-b border-[#ffffff9f] bg-transparent outline-none focus:outline-none focus:border-b-[#fff67ce1] placeholder-slate-100 focus:placeholder-gray-500"
                      placeholder="phone number"
                      required
                    />
                  </div>
                </div>
                {/* password section  */}
                <div className=" flex flex-col md:flex-row gap-5">
                  <div className=" flex items-center gap-3 px-3 py-1  ">
                    {/* <h2 className=" text-xl">
                      <RiLockPasswordLine />
                    </h2> */}
                    <button
                      className=" flex items-center text-slate-100 text-xl"
                      onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? <VscEye /> : <VscEyeClosed />}
                    </button>
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      className=" text-center border-b border-[#ffffff9f] bg-transparent outline-none focus:outline-none focus:border-b-[#fff67ce1] placeholder-slate-100 focus:placeholder-gray-500"
                      placeholder="password"
                      required
                    />
                  </div>
                  <div className=" flex items-center gap-3 px-3 py-1  ">
                    {/* <h2 className=" text-xl">
                      <RiLockPasswordLine />
                    </h2> */}
                    <button
                      className=" flex items-center text-slate-100 text-xl"
                      onClick={togglePasswordVisibility2}>
                      {isPasswordVisible2 ? <VscEye /> : <VscEyeClosed />}
                    </button>
                    <input
                      type={isPasswordVisible2 ? "text" : "password"}
                      className=" text-center border-b border-[#ffffff9f] bg-transparent outline-none focus:outline-none focus:border-b-[#fff67ce1] placeholder-slate-100 focus:placeholder-gray-500"
                      placeholder=" confirm password"
                      required
                    />
                  </div>
                </div>
                {/* register section  */}
                <div className=" pt-5">
                  <h2 className=" text-center text-xs font-semibold">
                    Register With
                  </h2>
                  <div className=" flex gap-8 justify-center items-center py-3 text-xl">
                    <Tooltip title="Facebook" placement="top">
                      <button className=" hover:text-blue-700">
                        <FaFacebook />
                      </button>
                    </Tooltip>
                    <Tooltip title="Google" placement="top">
                      <button className=" hover:text-yellow-400">
                        <FaGoogle />
                      </button>
                    </Tooltip>
                    <Tooltip title="Github" placement="top">
                      <button className=" hover:text-gray-600">
                        <FaGithub />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className=" mt-5 w-full flex text-sm justify-evenly text-white">
                <h2>Already have an account?</h2>
                <Link to={"/"}>
                  <button className=" hover:underline hover:text-yellow-400">
                    Log-in
                  </button>
                </Link>
              </div>
              <button className=" hover:bg-[#9ab1dda6] border border-[#ffffff9f] text-white px-3 py-1 rounded font-semibold mt-3">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
