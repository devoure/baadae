import { BiArrowBack } from "react-icons/bi"

import banner from "../assets/nobanner.jpg"
import profPic from "../assets/nopic.png"
import { MdEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
import { BsFillCalendarEventFill } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { BsBookmarkFill } from "react-icons/bs"
import { BiSolidUser } from "react-icons/bi"
import { AiFillEye } from "react-icons/ai"

import { useContext } from "react"

import { Link } from "react-router-dom"

import { AuthContext } from "../contexts/AuthContext.jsx"
import { BookmarkCtx } from "../contexts/BookmarkCtx.jsx"

function ProfileComp(props) {
  const { user, userProfile, userCred, hostUrl } = useContext(AuthContext)
  const { bookmarks } = useContext(BookmarkCtx)
  const feedsCard = bookmarks.map((bookmark)=>{
    return(
      <div className="group w-full h-[400px] mb-4 flex flex-col items-center hover:bg-[#ebebeb] cursor-pointer" key={ bookmark.id }>
        <span className="flex h-16 w-[90%] items-center text-[#4f352a] text-lg font-roboto font-semibold">{ bookmark.desc }</span>
        <div className="w-[80%] h-[340px] rounded-xl overflow-hidden relative">
          <img src={ hostUrl + bookmark.image } className="w-full h-full object-cover"/> 
          <div className="absolute flex items-center justify-center inset-x-0 bottom-0 h-0 group-hover:h-16 bg-[#220e0acc] overflow-hidden transition-all duration-300">
            <div className="h-full w-16 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
              <AiFillEye className="text-white text-4xl"/>
              <span className="text-white">{ 22 }</span>
            </div>
            <div className="h-full w-16 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
              <AiFillHeart className="text-white text-3xl"/>
              <span className="text-white">{ bookmark.users_like.length }</span>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className={ props.editActive ? "min-w-[375px] flex flex-col blur-sm tablet:w-[600px]" : "min-w-[375px] flex flex-col tablet:w-[600px]" }>
      <div className="w-full h-20 flex items-center pl-4 text-[#220e0a] border-b border-[#ebebeb]">
        <Link to='/baadae' className="h-12 w-12 flex hover:bg-[#ebebeb] rounded-full cursor-pointer items-center justify-center text-3xl transition duration-300">
          <BiArrowBack />
        </Link>

        <div className="h-12 w-max flex items-center justify-center font-roboto font-semibold text-xl pl-4 select-none whitespace-nowrap">
          <span>My Profile</span>
        </div>
      </div>

      <div className="w-full h-[200px] flex items-center justify-center">
        <div className="w-[90%] h-[90%] relative">
          <img src={ userProfile && userProfile.banner ? hostUrl + userProfile.banner : banner } className="h-full w-full object-cover"/>
          <div className="h-20 w-20 bottom-[-2.4rem] left-2 rounded-full absolute bg-white overflow-hidden border-4 border-white">
            <img src={ userProfile && userProfile.photo ? hostUrl + userProfile.photo : profPic } className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="flex h-16 font-roboto font-semibold text-white items-center justify-end text-lg">
        <span className="hover:bg-[#220e0a] text-[#220e0a] border-2 hover:text-white mr-[4rem] px-6 py-2 rounded-[4rem] select-none cursor-pointer transition duration-300" onClick={ props.openEdit }>Edit Profile</span>
      </div>

      <div className="flex flex-col h-[200px] select-none whitespace-nowrap items-center">
        <div className="w-[90%] h-max flex flex-col font-roboto">
          <div className="py-2 text-2xl font-semibold text-[#220e0a]">{ userCred && userCred.first_name + " " + userCred.last_name }</div>
          <div className="pt-2 flex w-max items-center cursor-pointer hover:border-b-2 border-[#d6a97d]">
            <MdEmail  className="text-[#220e0a] mr-2 text-2xl"/>
            <span className="text-[#d6a97d] font-semibold">{ userCred && userCred.email }</span>
          </div>
        </div>

        <div className="pt-2 flex w-[90%] h-max font-roboto text-[#4f352a] font-semibold mb-4">
          <span>{ userProfile && userProfile.bio }</span>
        </div>

        <div className="flex w-[90%] h-9 font-roboto items-center px-2">
          <div className="flex h-16 items-center ">
            <FaLocationDot className="text-[#220e0a] text-xl"/>
            <span className="text-[#4f352a] ml-2">{ userProfile && userProfile.location ? userProfile.location : "N/A" }</span>
          </div>

          <div className="flex h-16 p-2 items-center ">
            <BsFillCalendarEventFill className="text-[#220e0a] text-lg"/>
            <span className="text-[#4f352a] ml-2">{ "Joined  " + userCred && userCred.date_joined.split("T")[0] }</span>
          </div>
        </div>

        <div className="flex w-[90%] h-9 font-roboto items-center px-2">
          <div className="flex h-16 items-center ">
            <AiFillHeart className="text-[#220e0a] text-2xl"/>
            <span className="text-[#4f352a] ml-2"><span className="font-semibold">45</span> Likes</span>
          </div>

          <div className="flex h-16 p-2 items-center ">
            <BsBookmarkFill className="text-[#220e0a] text-lg"/>
            <span className="text-[#4f352a] ml-2"><span className="font-semibold">{ bookmarks.length }</span> Bookmarks</span>
          </div>

          <div className="flex h-16 p-2 items-center ">
            <BiSolidUser className="text-[#220e0a] text-2xl"/>
            <span className="text-[#4f352a] ml-2"><span className="font-semibold">{ userCred.followers.length }</span> Followers</span>
          </div>

        </div>
      </div>

      <div className="w-full h-max font-roboto mt-8 flex flex-col items-center">
          <div className="w-[90%] h-16 font-semibold text-xl border-b-2 border-[#ebebeb] flex items-end">
            <span className="h-full w-max border-b-4 border-[#d6a97d] py-3">My Bookmarks</span>
          </div>

          <div className="w-full h-max flex flex-col items-center pt-[20px]">
            { feedsCard }
          </div>
      </div>
    </div>
  )
}

export default ProfileComp
