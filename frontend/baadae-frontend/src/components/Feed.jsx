import feeds from "../assets/feeds.jsx"
import { AiFillHeart } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"

import { Link } from "react-router-dom"


function Feed(){

  const feedsCard = feeds.map((feed)=>{
    return(
      <Link to={ `/bookmarks/${ feed.id }` } state={ feed } className="group flex flex-col justify-between items-end w-full min-h-[420px] mb-10 hover:bg-[#fafafa] cursor-pointer pt-5 tablet:min-h-[430px]" key={ feed.id }>
        <div className="flex h-12 w-full font-roboto font-semibold text-sm items-center justify-between select-none text-[#baaf98] px-5">
          <span className="flex items-center"><AiFillHeart className="text-2xl inline mr-2"/>Bruno Liked</span>
          <span>~ { feed.time } ago</span>
        </div>

        <div className="flex items-center h-16 w-full px-5 select-none">
          <img src={ feed.profpic } className="w-14 h-14 object-cover rounded-full"/>
          <div className="flex flex-col h-full font-roboto font-semibold ml-5">
            <span className="text-[#220e0c] tablet:text-lg">{ feed.name }</span>
            <span className="text-[#4f352a] text-sm tablet:text-lg pt-2">{ feed.desc }</span>
          </div>
        </div>
        <div className="flex w-[80%] h-[340px] bg-white mr-5 relative rounded-xl overflow-hidden">
          <img src={ feed.bookmark } className="w-full h-full object-cover"/>
          <div className="absolute flex items-center justify-center inset-x-0 bottom-0 h-0 group-hover:h-16 bg-[#220e0acc] overflow-hidden transition-all duration-300">
            <div className="h-full w-16 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
              <AiFillEye className="text-white text-4xl"/>
              <span className="text-white">{ feed.views }</span>
            </div>
            <div className="h-full w-16 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
              <AiFillHeart className="text-white text-3xl"/>
              <span className="text-white">{ feed.likes }</span>
            </div>
          </div>
        </div>
      </Link>
    )
  })
  return (
    <div className="flex flex-col min-w-[375px] pt-[130px] tablet:max-w-[600px]">
      { feedsCard }
    </div>
  )
}

export default Feed
