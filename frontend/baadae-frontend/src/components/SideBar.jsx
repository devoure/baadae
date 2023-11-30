import siteLogo from "../assets/sitelogo.png"

import profPic from "../assets/nopic.png"

import { useContext } from 'react'

import { Link } from "react-router-dom"

import { AiFillBell } from "react-icons/ai"
import { BsBookmarkFill } from "react-icons/bs"
import { BiSolidUser } from "react-icons/bi"
import { BiLogOut } from "react-icons/bi"

import { AuthContext } from "../contexts/AuthContext.jsx"

function SideBar(){
  let { logOutUser, userCred, userProfile } = useContext(AuthContext)
  return (
    <div className="hidden tablet:flex sticky inset-y-0 left-0 h-screen w-[80px] laptop:w-[300px] border-r border-r-[#baaf98]">
      
      <div className="h-full w-full flex flex-col items-center justify-between">
        <div className="flex w-full h-[15%] min-h-[5rem] items-center justify-center laptop:justify-start">
          <div className="w-16 h-16 bg-black rounded-full overflow-hidden">
            <img src={ siteLogo } className="object-cover h-16 w-16"/>
          </div>

          <div className="hidden laptop:block">
            <span className="font-semibold font-roboto text-2xl ml-4 text-[#220e0a] select-none">baadae</span>
          </div>
        </div>

        <div className="flex flex-col w-full h-[55%] min-h-[300px] items-center justify-center">
          <div className="flex items-center justify-start w-full mb-5">
            <div className="w-16 h-16 flex items-center justify-center relative bg-white">
              <span className="absolute right-1 top-1 bg-[#d6a97d] w-7 h-7 flex items-center justify-center rounded-full font-roboto font-semibold text-[#220e0a] select-none">3</span>
              <AiFillBell className="text-4xl text-[#220e0a]"/>
            </div>

            <div className="hidden laptop:block">
              <span className="font-roboto text-xl ml-4 text-[#220e0a] select-none whitespace-nowrap">New Feed</span>
            </div>
          </div>

          <div className="flex items-center justify-start w-full mb-5">
            <div className="w-16 h-16 flex items-center justify-center relative">
              <span className="absolute right-1 top-1 bg-[#d6a97d] w-7 h-7 flex items-center justify-center rounded-full font-roboto font-semibold text-[#220e0a] select-none">3</span>
              <BsBookmarkFill className="text-3xl text-[#220e0a]"/>
            </div>
            <div className="hidden laptop:block">
              <span className="font-roboto text-xl ml-4 text-[#220e0a] select-none whitespace-nowrap">My Bookmarks</span>
            </div>
          </div>
          <Link to={ '/profile' } className="flex items-center justify-center laptop:justify-start laptop:w-full mb-5 tablet:w-16 tablet:h-16 tablet:rounded-full laptop:rounded-none hover:bg-[#ebebeb] cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center relative">
              <BiSolidUser className="text-4xl text-[#220e0a]"/>
            </div>
            <div className="hidden laptop:block">
              <span className="font-roboto text-xl ml-4 text-[#220e0a] whitespace-nowrap">Visit Profile</span>
            </div>
          </Link>
        </div>

        <div className="h-[15%] min-h-[5rem] w-full flex items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center relative hover:bg-[#ebebeb] cursor-pointer laptop:hidden">
                <span className="absolute right-1 top-1 bg-[#d6a97d] w-7 h-7 flex items-center justify-center rounded-full font-roboto font-semibold text-[#220e0a] select-none">+</span>
                <BsBookmarkFill className="text-3xl text-[#220e0a]"/>
          </div>
          <div className="flex h-16 w-full items-center justify-center laptop:block hidden">
            <span className="font-semibold font-roboto text-xl bg-[#220e0a] text-[#d6a97d] p-2 laptop:py-3 px-8 rounded-3xl cursor-pointer">Bookmark</span>
          </div>

        </div>

        <div className="h[15%] min-h-[5rem] w-full flex items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-[#ebebeb] cursor-pointer laptop:hidden">
            <BiLogOut className="text-red-700 text-4xl"/>
          </div>


          <div className="hidden laptop:flex h-32 w-full items-center">
            <div className="h-16 w-16 bg-white rounded-full">
              <img src={ userProfile && userProfile.photo ? userProfile.photo : profPic  } className="object-cover h-full w-full rounded-full" />
            </div>

            <div className="flex  flex-col h-16 font-roboto font-semibold text-xl ml-4">
              <span className="text-[220e0a] select-none">{ userCred && userCred.first_name + " " + userCred.last_name } </span>
              <span className="text-red-700 text-lg text-center cursor-pointer hover:border-b-4 border-[#220e0a]" onClick={ logOutUser }>Log out</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default SideBar
