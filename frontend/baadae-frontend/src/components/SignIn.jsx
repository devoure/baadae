import siteLogo from "../assets/sitelogo.png"
import { AiFillGoogleSquare } from "react-icons/ai"
import {  AiFillTwitterCircle } from "react-icons/ai"
import {  AiFillFacebook } from "react-icons/ai"

function SignIn(){
  return (
    <div className="w-full h-full flex justify-center items-center">
      
      <div className="w-[90%] h-[90%]">

        <div className="p-0 m-0 flex justify-start">
          <img src = { siteLogo }  className="max-w-[4rem] max-h-[4rem]"/>
        </div>

        <div className="flex justify-start">
          <span className="tracking-normal leading-relaxed font-roboto text-5xl font-bold text-[#220e0a] whitespace-nowrap">Seen something ?</span>
        </div>

        <div className="flex justify-start">
          <span className="tracking-normal leading-relaxed font-roboto text-3xl font-bold text-[#220e0a] whitespace-nowrap">Share here.</span>
        </div>

        <div className="flex-col min-w-80 h-full">

          <div className="flex items-center justify-center border-2 border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#dd4f43] p-1 mb-2">
            <  AiFillGoogleSquare  className="text-4xl text-[#dd4f43]"/>
            <span className="ml-2 whitespace-nowrap">Sign up with Google</span>
          </div>

          <div className="flex items-center justify-center border-2 border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#1a4789] p-1 mb-2">
            < AiFillFacebook className="text-4xl text-[#1a4789]"/>
            <span className="ml-2 whitespace-nowrap">Sign up with Facebook</span>
          </div>

          <div className="flex items-center justify-center border-2 border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#1b9df0] p-1 mb-2">
            < AiFillTwitterCircle className="text-4xl text-[#1b9df0]"/>
            <span className="ml-2 whitespace-nowrap">Sign up with Twitter</span>
          </div>

        </div>

        <div>
        </div>

        <div>
        </div>

        <div>
        </div>

        <div>
        </div>

        <div>
        </div>

      </div>

    </div>
  )
}

export default SignIn
