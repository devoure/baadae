import { BiArrowBack } from "react-icons/bi"
import banner from "../assets/banner.jpg"
import noProfPic from "../assets/nopic.png"
import { MdEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
import { BsFillCalendarEventFill } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { BsBookmarkFill } from "react-icons/bs"
import { BiSolidUser } from "react-icons/bi"
import { AiFillEye } from "react-icons/ai"
import { useContext, useState, useEffect } from "react"

import { BookmarkCtx } from "../contexts/BookmarkCtx.jsx"
import { AuthContext } from "../contexts/AuthContext.jsx"

import { Link, useLocation } from "react-router-dom"

function PeopleComp() {
  let { hostUrl, user } = useContext(AuthContext)
  let { getPeople } = useContext(BookmarkCtx)
  const location = useLocation()
  const { person } = location.state
  const [bookmarks, setBookmarks] = useState([])
  let getBookmarks = async (id)=> {
    let res = await fetch(`http://127.0.0.1:8000/api/bookmarks/v1/get/${id}/`) 
    let data = await res.json()
    if ( res.status === 200 ){
      setBookmarks(data)
    }
  }
  useEffect(()=>{
    getBookmarks(person.user.id)
  }, [])
  function checkFollowStatus(follower){
    return user.user_id == follower
  }
  const [followed, setFollowed] = useState(()=> person.user.followers.find(checkFollowStatus) ? true : false)
  const [followersCount, setFollowersCount] = useState(person.user.followers.length)
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
  function followUnfollow(){
    fetch(`http://127.0.0.1:8000/api/accounts/v1/users/follow/${user.user_id}/`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({user:person.user.id})
    }).then(response =>{
      if (response.status === 200){
        getPeople(user.user_id)
        setFollowed(prev => !prev)
        return response.json()
      }
    }).then(data => {
      setFollowersCount(data.followers.length)
    })
  }
  return (
    <div className="min-w-[375px] flex flex-col tablet:w-[600px]">
      <div className="w-full h-20 flex items-center pl-4 text-[#220e0a] border-b border-[#ebebeb]">
        <Link to='/baadae' className="h-12 w-12 flex hover:bg-[#ebebeb] rounded-full cursor-pointer items-center justify-center text-3xl transition duration-300">
          <BiArrowBack />
        </Link>

        <div className="h-12 w-max flex items-center justify-center font-roboto font-semibold text-xl pl-4 select-none whitespace-nowrap">
          <span>{ person.user.first_name + " " + person.user.last_name }</span>
        </div>
      </div>

      <div className="w-full h-[200px] flex items-center justify-center">
        <div className="w-[90%] h-[90%] relative">
          <img src={ banner } className="h-full w-full object-cover"/>
          <div className="h-20 w-20 bottom-[-2.4rem] left-2 rounded-full absolute bg-white overflow-hidden border-4 border-white">
            <img src={ person.profile.photo ? hostUrl + person.profile.photo : noProfPic } className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="flex h-16 font-roboto font-semibold text-white items-center justify-end text-lg">
        <span className={ followed ? "bg-red-700 hover:bg-red-400 hover:text-black mr-[4rem] px-6 py-2 rounded-[4rem] select-none cursor-pointer transition-all duration-300" : "bg-[#220e0a] hover:bg-[#d6a97d] hover:text-black mr-[4rem] px-6 py-2 rounded-[4rem] select-none cursor-pointer transition-all duration-300" } onClick={ followUnfollow }>{ followed ? "Unfollow" : "Follow" }</span>
      </div>

      <div className="flex flex-col h-[200px] select-none whitespace-nowrap items-center">
        <div className="w-[90%] h-max flex flex-col font-roboto">
          <div className="py-2 text-2xl font-semibold text-[#220e0a]">{ person.user.first_name + " " + person.user.last_name }</div>
          <div className="pt-2 flex w-max items-center cursor-pointer hover:border-b-2 border-[#d6a97d]">
            <MdEmail  className="text-[#220e0a] mr-2 text-2xl"/>
            <span className="text-[#d6a97d] font-semibold">{ person.user.email }</span>
          </div>
        </div>

        <div className="pt-2 flex w-[90%] h-max font-roboto text-[#4f352a] font-semibold mb-4">
          <span>{ person.profile.bio }</span>
        </div>

        <div className="flex w-[90%] h-9 font-roboto items-center px-2">
          <div className="flex h-16 items-center ">
            <FaLocationDot className="text-[#220e0a] text-xl"/>
            <span className="text-[#4f352a] ml-2">Nairobi</span>
          </div>

          <div className="flex h-16 p-2 items-center ">
            <BsFillCalendarEventFill className="text-[#220e0a] text-lg"/>
            <span className="text-[#4f352a] ml-2">Joined August 2017</span>
          </div>
        </div>

        <div className="flex w-[90%] h-9 font-roboto items-center px-2">
          <div className="flex h-16 items-center ">
            <AiFillHeart className="text-[#220e0a] text-2xl"/>
            <span className="text-[#4f352a] ml-2"><span className="font-semibold">{ 44 }</span> Likes</span>
          </div>

          <div className="flex h-16 p-2 items-center ">
            <BsBookmarkFill className="text-[#220e0a] text-lg"/>
            <span className="text-[#4f352a] ml-2"><span className="font-semibold">{ bookmarks.length }</span> Bookmarks</span>
          </div>

          <div className="flex h-16 p-2 items-center ">
            <BiSolidUser className="text-[#220e0a] text-2xl"/>
            <span className="text-[#4f352a] ml-2"><span className="font-semibold">{ followersCount }</span> Followers</span>
          </div>

        </div>
      </div>

      <div className="w-full h-max font-roboto mt-8 flex flex-col items-center">
          <div className="w-[90%] h-16 font-semibold text-xl border-b-2 border-[#ebebeb] flex items-end">
            <span className="h-full w-max border-b-4 border-[#d6a97d] py-3">Bookmarks</span>
          </div>

          <div className="w-full h-max flex flex-col items-center pt-[20px]">
            { feedsCard }
          </div>
      </div>
    </div>
  )
}

export default PeopleComp
