import { useState, useContext } from "react"
import TimeAgo from "react-timeago"

import noPic from "../assets/nopic.png"

import { useLocation, Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi"

import { AiFillHeart } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"

import { AuthContext } from "../contexts/AuthContext.jsx"
import { BookmarkCtx } from "../contexts/BookmarkCtx.jsx"

function BookmarkComp() {
  function findLikes(liker){
    return liker == user.user_id
  }

  let { hostUrl, userProfile, userCred, user } = useContext(AuthContext)
  let { getBookmarks, bookmarks } = useContext(BookmarkCtx)
  const location = useLocation()
  const { bookmark } = location.state
  const [likesCount, setLikesCount] = useState(bookmark.users_like.length)
  const [liked, setLiked] = useState(()=> bookmark.users_like.find(findLikes) ? true : false )

  function likeUnlike(){
    fetch(`http://127.0.0.1:8000/api/bookmarks/v1/like/${bookmark.id}/`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({user:user.user_id})
    }).then(response =>{
      if (response.status === 200){
        getBookmarks(user.user_id)
        setLiked(prev => !prev)
        return response.json()
      }
    }).then(data => {
      setLikesCount(data.users_like.length)
    })

  }

  function getBookmarkDate(d){
    const date = new Date(d)
    return <TimeAgo date={date} locale="en" className=""/>
  }
  return (
    <div className="flex flex-col min-w-[375px] tablet:w-[600px]">
      <div className="w-full h-20 flex items-center pl-4 text-[#220e0a] border-b border-[#ebebeb]">
        <Link to='/baadae' className="h-12 w-12 flex hover:bg-[#ebebeb] rounded-full cursor-pointer items-center justify-center text-3xl transition duration-300">
          <BiArrowBack />
        </Link>

        <div className="h-12 w-max flex items-center justify-center font-roboto font-semibold text-2xl pl-4 select-none whitespace-nowrap">
          <span>Bookmark</span>
        </div>
      </div>
      
      <div className="w-full h-max">
        <div className="flex flex-col justify-between items-end w-full min-h-[440px] mb-10 hover:bg-[#fafafa] pt-5 tablet:min-h-[440px]" key={ bookmark.id }>
        <div className="flex items-start h-16 w-full px-5 select-none">
          <img src={ bookmark.user.profile ? hostUrl + bookmark.user.profile.photo : noPic } className="w-14 h-14 tablet:w-16 tablet:h-16 object-cover rounded-full"/>
          <div className="flex flex-col h-full font-roboto font-semibold ml-5 w-full">
            <div className="w-full flex items-center justify-between">
              <span className="text-[#220e0c] tablet:text-lg">{ userCred.first_name + " " + userCred.last_name }</span>
              <div className="font-roboto font-semibold text-sm text-[#baaf98]">~ { getBookmarkDate( bookmark.created ) }</div>
            </div>
            <div className="text-[#4f352a] text-sm tablet:text-lg pt-2">{ bookmark.desc }</div>
          </div>
        </div>
        <div className="flex w-[80%] h-[340px] bg-white mr-5 relative rounded-xl overflow-hidden">
          <img src={ hostUrl + bookmark.image } className="w-full h-full object-cover"/>
          <div className="absolute flex items-center justify-center inset-x-0 bottom-0 h-16 bg-[#220e0acc] overflow-hidden transition-all duration-300">
            <div className="h-full w-16 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
              <AiFillEye className="text-white text-4xl"/>
              <span className="text-white">{ 5 }</span>
            </div>
            <div className="h-full w-16 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
              <AiFillHeart className={ !liked ? "text-white text-3xl cursor-pointer hover:scale-[1.1] transition duration-300" : "cursor-pointer text-rose-600 text-3xl hover:scale-[1.1] transition duration-300" } onClick={ likeUnlike }/ >
              <span className="text-white">{ likesCount }</span>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default BookmarkComp
