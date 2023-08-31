import React from "react";
import "../components/login.css";
import login from "../assets/avatar.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/816e3b86128681.5d909dad46bf1.jpg)] h-screen bg-cover bg-no-repeat">
      <div className=" bg-black h-screen bg-opacity-30">
        <div className=" flex justify-center items-center h-full  ">
          <div className=" backdrop-blur-sm bg-white/10 w-fit h-fit rounded login-background flex gap-5">
            <div className=" rounded-s w-[300px] text-center bg-[url(https://i.pinimg.com/564x/d1/47/43/d14743aacf65bee7bfd6b9d4d310f74d.jpg)] bg-cover bg-no-repeat bg-opacity-25 right-side">
              <div className=" bg-purple-300 h-full bg-opacity-30 rounded-s">
                <h2 className=" flex justify-center items-center h-full font-bold text-xl italic font-serif text-white cursor-pointer break-words px-8">
                  Welcome Back To Music-Store
                </h2>
              </div>
            </div>
            <form className=" flex flex-col items-center px-5 py-10">
              <img
                src={login}
                alt=""
                className=" w-20 rounded-full opacity-90"
              />
              <div className=" pt-5 text-white flex flex-col gap-5">
                <div className=" flex items-center gap-3 px-3 py-1  ">
                  <h2 className=" text-xl">
                    <AiOutlineMail />
                  </h2>
                  <input
                    type="email"
                    className=" text-center border-b border-[#ffffff9f] bg-transparent outline-none focus:outline-none focus:border-b-[#fff67ce1]"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className=" flex items-center gap-3 px-3 py-1  ">
                  <h2 className=" text-xl">
                    <RiLockPasswordLine />
                  </h2>
                  <input
                    type="email"
                    className=" text-center border-b border-[#ffffff9f] bg-transparent outline-none focus:outline-none focus:border-b-[#fff67ce1]"
                    placeholder="password"
                    required
                  />
                </div>
                <div>
                  <h2 className=" text-center text-xs font-semibold">
                    Log In With
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
              <div className=" my-3 w-full flex text-sm justify-between text-white">
                <h2>You don't account?</h2>
                <Link to={'/register'}>
                <button className=" hover:underline hover:text-yellow-400">Register</button>
                </Link>
              </div>
              <button className=" hover:bg-[#9ab1dda6] border border-[#ffffff9f] text-white px-3 py-1 rounded font-semibold mt-5">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
