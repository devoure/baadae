import { useState } from "react"

import { useLocation, Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi"

import { AiFillHeart } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"

function BookmarkComp() {
  const feedDetails = useLocation()
  const [liked, setLiked] = useState(false)

  function likeUnlike(){
    setLiked((prev)=>{ return (!prev) })
  }

  return (
    <div className="flex flex-col min-w-[375px] tablet:min-w-[600px]">
      <div className="w-full h-20 flex items-center pl-4 text-[#220e0a] border-b border-[#ebebeb]">
        <Link to='/baadae' className="h-12 w-12 flex hover:bg-[#ebebeb] rounded-full cursor-pointer items-center justify-center text-3xl transition duration-300">
          <BiArrowBack />
        </Link>

        <div className="h-12 w-max flex items-center justify-center font-roboto font-semibold text-2xl pl-4 select-none whitespace-nowrap">
          <span>Feed</span>
        </div>
      </div>
      
      <div className="w-full h-max">
        <div className="flex flex-col justify-between items-end w-full min-h-[440px] mb-10 hover:bg-[#fafafa] pt-5 tablet:min-h-[440px]" key={ feedDetails.state.id }>
        <div className="flex items-start h-16 w-full px-5 select-none">
          <img src={ feedDetails.state.profpic } className="w-14 h-14 tablet:w-16 tablet:h-16 object-cover rounded-full"/>
          <div className="flex flex-col h-full font-roboto font-semibold ml-5">
            <span className="text-[#220e0c] tablet:text-lg">{ feedDetails.state.name }</span>
            <span className="text-[#4f352a] text-sm tablet:text-lg pt-2">{ feedDetails.state.desc }</span>
          </div>
          <span className="font-roboto font-semibold text-sm text-[#baaf98]">~ { feedDetails.state.time } ago</span>
        </div>
        <div className="flex w-[80%] h-[340px] bg-white mr-5 relative rounded-xl overflow-hidden">
          <img src={ feedDetails.state.bookmark } className="w-full h-full object-cover"/>
          <div className="absolute flex items-center justify-center inset-x-0 bottom-0 h-16 bg-[#220e0acc] overflow-hidden transition-all duration-300">
            <div className="h-full w-16 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
              <AiFillEye className="text-white text-4xl"/>
              <span className="text-white">{ feedDetails.state.views }</span>
            </div>
            <div className="h-full w-16 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
              <AiFillHeart className={ liked ? "text-white text-3xl cursor-pointer hover:scale-[1.1] transition duration-300" : "cursor-pointer text-rose-600 text-3xl hover:scale-[1.1] transition duration-300" } onClick={ likeUnlike }/ >
              <span className="text-white">{ feedDetails.state.likes }</span>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default BookmarkComp
