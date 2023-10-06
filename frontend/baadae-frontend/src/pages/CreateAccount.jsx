import { Link } from "react-router-dom"
import siteLogo from "../assets/sitelogo.png"
import siteImg from "../assets/siteimage.jpg"

function CreateAccount() {
  return (
    <div className="w-screen h-screen tablet:flex tablet:items-center tablet:justify-center">


      <div className={  "hidden laptop:flex w-[65%] h-[85%] min-h-[450px] items-center justify-center desktop:w-[45%]" }>
        <div className="w-[80%] h-[90%] rounded-3xl relative">
          <img src={ siteImg } className="object-cover w-full h-full rounded-3xl"/>

          <div className="absolute left-[-2rem] top-[-2rem] rounded-full">
            <img src = { siteLogo }  className="laptop:max-w-[6rem] laptop:max-h-[6rem] rounded-full object-cover desktop:max-w-[8rem] desktop:max-h-[8rem]"/>
          </div>

        </div>
      </div>

      <div className="flex flex-col tablet:w-[80%] tablet:h-[60%] tablet:rounded-[1.8rem] laptop:h-[80%] laptop:w-[40%] min-h-[490px] desktop:h-[60%] items-center justify-between h-[600px] mt-5 shadow-2xl laptop:shadow-none p-5">

        <div className="flex h-[6rem] items-center justify-center laptop:hidden">
          <div className="h-[6rem] w-[6rem]">
            <img src={ siteLogo } className="object-fit w-full h-full"/>
          </div>
        </div>


        <div className="flex items-center justify-center">
          <span className="tracking-normal leading-relaxed font-roboto text-4xl font-bold text-[#220e0a] whitespace-nowrap">Create an account</span>
        </div>
        
        <div className="flex items-center justify-center">
          <input type="text" placeholder="Enter Username" className="w-80 border border-[#baaf98] p-3 text-base font-semibold font-roboto appearance-none text-[#220e0a]"/>
        </div>

        <div className="flex items-center justify-center">
          <input type="text" placeholder="Enter First Name" className="w-80 border border-[#baaf98] p-3 text-base font-semibold font-roboto appearance-none text-[#220e0a]"/>
        </div>

        <div className="flex items-center justify-center">
          <input type="text" placeholder="Enter Second Name" className="w-80 border border-[#baaf98] p-3 text-base font-semibold font-roboto appearance-none text-[#220e0a]"/>
        </div>

        <div className="flex items-center justify-center">
          <input type="password" placeholder="Enter Password" className="w-80 border border-[#baaf98] p-3 text-base font-semibold font-roboto appearance-none text-[#220e0a]"/>
        </div>

        <div className="flex items-center justify-center">
          <input type="password" placeholder="Confirm Password" className="w-80 border border-[#baaf98] p-3 text-base font-semibold font-roboto appearance-none text-[#220e0a]"/>
        </div>

          <Link to={ '/success' }  className="flex items-center justify-center w-80  border-0 bg-[#220e0a] rounded-3xl text-base font-roboto font-semibold text-[#d6a97d] p-3 cursor-pointer">
            <span className="ml-2 whitespace-nowrap">Create account</span>
        </Link>

      </div>
    </div>
  )
}

export default CreateAccount
