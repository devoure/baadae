import { BsBookmarkFill } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"

import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"

import { AuthContext } from "../contexts/AuthContext.jsx"
import { BookmarkCtx } from "../contexts/BookmarkCtx.jsx"
import TimeAgo from "react-timeago"


function Feed(){
  let { getFeeds, feeds } = useContext(BookmarkCtx)
  let { user, hostUrl } = useContext(AuthContext) 
  function getBookmarkDate(d){
    const date = new Date(d)
    return <TimeAgo date={date} locale="en" className=""/>
  }

  useEffect(()=>{
    getFeeds(user.user_id)
  }, [])
  const feedsCard = feeds.map((feed)=>{
    return(
      <Link to={ `/bookmarks/${ feed.id }` } state={ feed } className="group flex flex-col justify-between items-end w-full min-h-[420px] mb-10 hover:bg-[#fafafa] cursor-pointer pt-5 tablet:min-h-[430px]" key={ feed.id }>
        <div className="flex h-12 w-full font-roboto font-semibold text-sm items-center justify-between select-none text-[#baaf98] px-5">
          <span className="flex items-center">{ feed.verb == "likes" ? <AiFillHeart className="text-2xl inline mr-2"/> : <BsBookmarkFill className="text-2xl inline mr-2" />}{ feed.verb == "likes" ? feed.target.user + " Liked" : feed.target.user + " added a bookmark" }</span>
          {/*<span>~ { feed.time } ago</span>*/}
          <div className="font-roboto font-semibold text-sm text-[#baaf98]">~ { getBookmarkDate(feed.created) }</div>
        </div>

        <div className="flex items-center h-16 w-full px-5 select-none">
          <img src={ hostUrl + feed.target.photo } className="w-14 h-14 object-cover rounded-full"/>
          <div className="flex flex-col h-full font-roboto font-semibold ml-5">
            <span className="text-[#220e0c] tablet:text-lg">{ feed.target.title }</span>
            <span className="text-[#4f352a] text-sm tablet:text-lg pt-2">{ feed.target.desc }</span>
          </div>
        </div>
        <div className="flex w-[80%] h-[340px] bg-white mr-5 relative rounded-xl overflow-hidden">
          <img src={ hostUrl + feed.target.bookmark } className="w-full h-full object-cover"/>
          <div className="absolute flex items-center justify-center inset-x-0 bottom-0 h-0 group-hover:h-16 bg-[#220e0acc] overflow-hidden transition-all duration-300">
            <div className="h-full w-16 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
              <AiFillEye className="text-white text-4xl"/>
              <span className="text-white">{ 4 }</span>
            </div>
            <div className="h-full w-16 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
              <AiFillHeart className="text-white text-3xl"/>
              <span className="text-white">{ feed.target.likes }</span>
            </div>
          </div>
        </div>
      </Link>
    )
  })
  return (
    <div className="flex flex-col min-w-[375px] pt-[130px] tablet:w-[600px]">
      { feedsCard }
    </div>
  )
}

export default Feed
