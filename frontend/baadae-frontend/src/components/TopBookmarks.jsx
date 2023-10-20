import feeds from "../assets/feeds.jsx"

import { AiFillHeart } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"

function TopBookmarks(){

  const feedsCard = feeds.slice(0, 4).map((feed)=>{
    return(
      <div className="w-[200px] desktop:w-[250px] h-[130px] desktop:h-[180px] relative cursor-pointer mb-2 hover:scale-[1.1] transition-all duration-300" key={ feed.id }>
        <div className="absolute flex items-center justify-center h-10 inset-x-0 bg-[#220e0acc]">
          <div className="h-full w-10 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
            <AiFillEye className="text-white text-lg" />
            <span className="text-white text-xs">{ feed.views }</span>
          </div>

          <div className="h-full w-10 mr-5 flex flex-col items-center justify-center font-roboto font-semibold">
            <AiFillHeart className="text-white text-lg" />
            <span className="text-white text-xs">{ feed.likes }</span>
          </div>

        </div>
        <img src={ feed.bookmark } className="w-full h-full object-cover" />
      </div>
    )
  })
  return (
    <div className="hidden laptop:flex sticky inset-y-0 right-0 h-screen w-[300px] desktop:w-[330px] border-l border-l-[#baaf98] items-center justify-center">
      <div className="h-max desktop:h-[80%] max-h-[800px] w-[80%] w-[250px] desktop:w-[300px] flex flex-col items-center rounded-2xl">
        <div className="font-roboto font-semibold text-[#220e0a] text-xl w-full p-2 mb-2 desktop:text-2xl ">
          Top Bookmarks
        </div>

        <div>
          { feedsCard }
        </div>
      </div>
    </div>
  )
}

export default TopBookmarks
