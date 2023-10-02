import siteLogo from "../assets/sitelogo.png"
import { AiFillGoogleSquare } from "react-icons/ai"
import {  AiFillTwitterCircle } from "react-icons/ai"
import {  AiFillFacebook } from "react-icons/ai"

function SignIn(){
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      
      <div className="w-[90%] h-[90%]  flex flex-col justify-between">

        <div className="p-0 m-0 flex justify-start">
          <img src = { siteLogo }  className="max-w-[4rem] max-h-[4rem]"/>
        </div>

        <div className="flex justify-start">
          <span className="tracking-normal leading-relaxed font-roboto text-5xl font-bold text-[#220e0a] whitespace-nowrap">Seen something ?</span>
        </div>

        <div className="flex justify-start">
          <span className="tracking-normal leading-relaxed font-roboto text-3xl font-bold text-[#220e0a] whitespace-nowrap">Share here.</span>
        </div>

        <div className="flex-col w-96 font-roboto">

          <div className="flex items-center justify-center border border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#dd4f43] p-1 mb-2 cursor-pointer">
            <  AiFillGoogleSquare  className="text-4xl text-[#dd4f43]"/>
            <span className="ml-2 whitespace-nowrap">Sign up with Google</span>
          </div>

          <div className="flex items-center justify-center border border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#1a4789] p-1 mb-2 cursor-pointer">
            < AiFillFacebook className="text-4xl text-[#1a4789]"/>
            <span className="ml-2 whitespace-nowrap">Sign up with Facebook</span>
          </div>

          <div className="flex items-center justify-center border border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#1b9df0] p-1 mb-2 cursor-pointer">
            < AiFillTwitterCircle className="text-4xl text-[#1b9df0]"/>
            <span className="ml-2 whitespace-nowrap">Sign up with Twitter</span>
          </div>

        </div>

        <div className="flex py-2 w-96 items-center justify-start">
          <hr className="border border-[#baaf98] w-44"/><span className="font-roboto font-semibold px-4 text-[#220e0a]">or</span><hr className="border border-[#baaf98] w-40"/>
        </div>

        <div  className="flex items-center justify-center w-96  border-0 bg-[#220e0a] rounded-3xl text-base font-roboto font-semibold text-[#d6a97d] p-3 cursor-pointer">
            <span className="ml-2 whitespace-nowrap">Create account</span>
        </div>

        <div className="w-96 p-2 text-xs font-roboto text-[#baaf98] font-semibold">
          <span>By signing up, you agree to the <span className="text-[#220e0a]">Terms of Service</span> and been a <span className="text-[#220e0a]">Manchester United</span> fan</span>
        </div>

        <div className="font-roboto text-[#220e0a] font-semibold p-2 mt-4 text-lg">
          <span className="whitespace-nowrap">Already have an account ?</span>
        </div>

        <div  className="flex items-center justify-center w-96  border border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#220e0a] p-3 cursor-pointer">
            <span className="ml-2 whitespace-nowrap">Sign in</span>
        </div>

      </div>

      <div className="absolute inset-0 bg-black hidden">

        <div className="">
        </div>

      </div>

    </div>
  )
}

export default SignIn
