import { AiFillHeart } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"

import noPic from "../assets/nopic.png"

import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext.jsx"
import TimeAgo from "react-timeago"


function Bookmarks(props){
  let { userProfile, hostUrl, userCred } = useContext(AuthContext)
  function getBookmarkDate(d){
    const date = new Date(d)
    return <TimeAgo date={date} locale="en" className=""/>
  }

  const bookmarksCard = props.bookmarks.map((bookmark)=>{
    return(
      <Link to={`/bookmarks/${bookmark.id}`} state={ {bookmark:bookmark} } className="group flex flex-col justify-between items-end w-full min-h-[420px] mb-10 hover:bg-[#fafafa] cursor-pointer pt-5 tablet:min-h-[430px]" key={ bookmark.id }>
        <div className="flex items-start h-16 w-full px-5 select-none ">
          <img src={ userProfile && userProfile.photo ? hostUrl + userProfile.photo : noPic } className="w-14 h-14 tablet:w-16 tablet:h-16 object-cover rounded-full"/>
          <div className="flex flex-col h-full font-roboto font-semibold ml-5 w-full">
            <div className="w-full flex items-center justify-between">
              <span className="text-[#220e0c] tablet:text-lg">{ userCred.first_name + " " + userCred.last_name }</span>
              <div className="font-roboto font-semibold text-sm text-[#baaf98]">~ { getBookmarkDate(bookmark.created) }</div>
            </div>
            <div className="text-[#4f352a] text-sm tablet:text-lg pt-2">{ bookmark.desc }</div>
          </div>
        </div>
        <div className="flex w-[80%] h-[340px] bg-white mr-5 relative rounded-xl overflow-hidden">
          <img src={ hostUrl + bookmark.image } className="w-full h-full object-cover"/>
          <div className="absolute flex items-center justify-center inset-x-0 bottom-0 h-0 group-hover:h-16 bg-[#220e0acc] overflow-hidden transition-all duration-300">
            <div className="h-full w-16 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
              <AiFillEye className="text-white text-4xl"/>
              <span className="text-white">{ "e" }</span>
            </div>
            <div className="h-full w-16 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
              <AiFillHeart className="text-white text-3xl"/>
              <span className="text-white">{ "rr" }</span>
            </div>
          </div>
        </div>
      </Link>
    )
  })
  return (
    <div className="flex flex-col min-w-[375px] pt-[130px] tablet:w-[600px]">
      { bookmarksCard }
    </div>
  )
}

export default Bookmarks
