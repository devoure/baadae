import siteLogo from "../assets/sitelogo.png"
import siteImg from "../assets/siteimage.jpg"
import { AiFillGoogleSquare } from "react-icons/ai"
import {  AiFillTwitterCircle } from "react-icons/ai"
import {  AiFillFacebook } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from 'react'

function SignIn(){
  const [signIn, setSignIn] = useState(false)

  function displaySignIn(){
    setSignIn(true)
  }

  function displaySignUp(){
    setSignIn(false)
    console.log(signIn)
  }
  return (
    <div className="w-full h-full flex justify-center items-center relative">

      <div className={ signIn ? "hidden blur-lg laptop:flex w-[65%] h-[85%] items-center justify-center desktop:w-[45%]" : "hidden laptop:flex w-[65%] h-[85%] items-center justify-center desktop:w-[45%]" }>
        <div className="w-[80%] h-[90%] rounded-3xl relative">
          <img src={ siteImg } className="object-cover w-full h-full rounded-3xl"/>

          <div className="absolute left-[-2rem] top-[-2rem] rounded-full">
            <img src = { siteLogo }  className="laptop:max-w-[6rem] laptop:max-h-[6rem] rounded-full object-cover desktop:max-w-[8rem] desktop:max-h-[8rem]"/>
          </div>

        </div>
      </div>
      
      <div className={ signIn ? "blur-lg w-[90%] h-[90%]  flex flex-col justify-between tablet:items-center laptop:items-start laptop:w-[35%] laptop:h-[85%] desktop:h-[70%]" : "w-[90%] h-[90%]  flex flex-col justify-between tablet:items-center laptop:items-start laptop:w-[35%] laptop:h-[85%] desktop:h-[70%]"}>

        <div className="p-0 m-0 flex justify-start laptop:hidden">
          <img src = { siteLogo }  className="max-w-[4rem] max-h-[4rem] tablet:max-h-[6rem] tablet:max-w-[6rem] laptop:max-w-[5rem] laptop:max-h-[5rem]"/>
        </div>

        <div className="flex justify-start laptop:mb-10">
          <span className="tracking-normal leading-relaxed font-roboto text-5xl font-bold text-[#220e0a] whitespace-nowrap tablet:text-7xl laptop:text-6xl desktop:text-7xl">Seen something ?</span>
        </div>

        <div className="flex justify-start laptop:mb-5">
          <span className="tracking-normal leading-relaxed font-roboto text-3xl font-bold text-[#220e0a] whitespace-nowrap tablet:text-5xl laptop:text-3xl desktop:text-[3rem]">Share here.</span>
        </div>

        <div className="flex-col w-96 font-roboto">

          <div className="flex items-center justify-center border border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#dd4f43] p-1 mb-2 cursor-pointer tablet:text-lg tablet:rounded-[1.8rem] laptop:text-base">
            <  AiFillGoogleSquare  className="text-4xl text-[#dd4f43] tablet:text-5xl laptop:text-4xl"/>
            <span className="ml-2 whitespace-nowrap">Sign up with Google</span>
          </div>

          <div className="flex items-center justify-center border border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#1a4789] p-1 mb-2 cursor-pointer tablet:text-lg tablet:rounded-[1.8rem] laptop:text-base">
            < AiFillFacebook className="text-4xl text-[#1a4789] tablet:text-5xl laptop:text-4xl"/>
            <span className="ml-2 whitespace-nowrap">Sign up with Facebook</span>
          </div>

          <div className="flex items-center justify-center border border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#1b9df0] p-1 mb-2 cursor-pointer tablet:text-lg tablet:rounded-[1.8rem] laptop:text-base laptop:mb-0">
            < AiFillTwitterCircle className="text-4xl text-[#1b9df0] tablet:text-5xl laptop:text-4xl"/>
            <span className="ml-2 whitespace-nowrap">Sign up with Twitter</span>
          </div>

        </div>

        <div className="flex py-2 w-96 items-center justify-start">
          <hr className="border border-[#baaf98] w-44"/><span className="font-roboto font-semibold px-4 text-[#220e0a] tablet:text-xl laptop:text-lg">or</span><hr className="border border-[#baaf98] w-40"/>
        </div>

        <div  className="flex items-center justify-center w-96  border-0 bg-[#220e0a] rounded-3xl text-base font-roboto font-semibold text-[#d6a97d] p-3 cursor-pointer tablet:text-lg tablet:rounded-[1.8rem] laptop:text-base">
            <span className="ml-2 whitespace-nowrap">Create account</span>
        </div>

        <div className="w-96 p-2 text-xs tablet:text-sm font-roboto text-[#baaf98] font-semibold laptop:text-xs desktop:text-sm" >
          <span>By signing up, you agree to the <span className="text-[#220e0a]">Terms of Service</span> and been a <span className="text-[#220e0a]">Manchester United</span> fan</span>
        </div>

        <div className="font-roboto text-[#220e0a] font-semibold p-2 mt-4 text-lg tablet:text-xl laptop:text-lg laptop:mt-0">
          <span className="whitespace-nowrap">Already have an account ?</span>
        </div>

        <div  className="flex items-center justify-center w-96  border border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#220e0a] p-3 cursor-pointer tablet:text-lg tablet:rounded-[1.8rem] laptop:text-base desktop:text-lg" onClick={ displaySignIn }>
            <span className="ml-2 whitespace-nowrap">Sign in</span>
        </div>

      </div>

      <div className= {signIn ? "absolute inset-0 bg-[#220e0acc] tablet:flex tablet:items-center tablet:justify-center" : "hidden"}>

        <div className="w-full h-full tablet:w-[35rem] tablet:h-[50rem] laptop:h-[42rem] desktop:h-[50rem] tablet:rounded-[1.9rem] bg-white relative flex flex-col items-center justify-between">

          <div className="flex justify-center items-center absolute left-2 top-2 h-12 w-12 rounded-full cursor-pointer text-[#220e0a] hover:bg-[#220e0a] hover:text-[#d6a97d] transition duration-300" onClick={ displaySignUp }>
            <AiOutlineClose className="text-3xl"/>
          </div>

          <div className="p-0 m-0 flex justify-center items-center mt-12">
            <img src = { siteLogo }  className="max-w-[4rem] max-h-[4rem]"/>
          </div>
        
          <div className="flex items-center justify-center">
            <span className="tracking-normal leading-relaxed font-roboto text-4xl font-bold text-[#4f352a] whitespace-nowrap">Sign in to <span className="text-[#220e0a]">baadae</span></span>
          </div>
        
          <div className="flex flex-col font-roboto justify-center items-center">

            <div className="flex items-center justify-center w-96 border border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#dd4f43] p-1 mb-5 cursor-pointer">
              <  AiFillGoogleSquare  className="text-4xl text-[#dd4f43]"/>
              <span className="ml-2 whitespace-nowrap">Sign in with Google</span>
            </div>

            <div className="flex items-center justify-center w-96 border border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#1a4789] p-1 mb-5 cursor-pointer">
              < AiFillFacebook className="text-4xl text-[#1a4789]"/>
              <span className="ml-2 whitespace-nowrap">Sign in with Facebook</span>
            </div>

            <div className="flex items-center justify-center w-96 border border-[#baaf98] rounded-3xl text-base font-roboto font-semibold text-[#1b9df0] p-1 cursor-pointer">
              < AiFillTwitterCircle className="text-4xl text-[#1b9df0]"/>
              <span className="ml-2 whitespace-nowrap">Sign in with Twitter</span>
            </div>

          </div>

        <div className="flex py-2 items-center justify-center">
          <hr className="border border-[#baaf98] w-44"/><span className="font-roboto font-semibold px-4 text-[#220e0a]">or</span><hr className="border border-[#baaf98] w-40"/>
        </div>

        <div className="flex items-center justify-center">
          <input type="text" placeholder="Enter Username" className="w-96 border border-[#baaf98] p-3 text-base font-semibold font-roboto appearance-none text-[#220e0a]"/>
        </div>

        <div  className="flex justify-center items-center text-base font-roboto font-semibold text-[#] cursor-pointer">
            <span className="whitespace-nowrap flex items-center justify-center w-96 border-0 bg-[#220e0a] text-[#d6a97d] rounded-3xl p-3">Next</span>
        </div>
       
        <div  className="flex justify-center items-center text-base font-roboto font-semibold text-[#] cursor-pointer">
            <span className="whitespace-nowrap flex items-center justify-center w-96 border border-[#baaf98] text-[#220e0a] rounded-3xl p-3">Forgot Password</span>
        </div>

        <div className="flex justify-center items-center font-roboto whitespace-nowrap p-2 text-lg text-[#baaf98] font-semibold mb-8">
          <span>Dont have an account ? <span className="text-[#220e0a] cursor-pointer hover:border-b-2 hover:border-b-[#220e0a] p-2 transition duration-300" onClick={ displaySignUp }>Sign up</span></span>
        </div>

       </div>

      </div>

    </div>
  )
}

export default SignIn
