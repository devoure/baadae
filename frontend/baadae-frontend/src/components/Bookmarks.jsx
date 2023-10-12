import feeds from "../assets/feeds.jsx"
import { AiFillHeart } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"


function Bookmarks(){

  const feedsCard = feeds.map((feed)=>{
    return(
      <div className="group flex flex-col justify-between items-end w-full min-h-[420px] mb-10 hover:bg-[#fafafa] cursor-pointer pt-5 tablet:min-h-[430px]" key={ feed.id }>
        <div className="flex items-start h-16 w-full px-5 select-none">
          <img src={ feed.profpic } className="w-14 h-14 tablet:w-16 tablet:h-16 object-cover rounded-full"/>
          <div className="flex flex-col h-full font-roboto font-semibold ml-5">
            <span className="text-[#220e0c] tablet:text-lg">{ feed.name }</span>
            <span className="text-[#4f352a] text-sm tablet:text-lg pt-2">{ feed.desc }</span>
          </div>
          <span className="font-roboto font-semibold text-sm text-[#baaf98]">~ { feed.time } ago</span>
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
      </div>
    )
  })
  return (
    <div className="flex flex-col min-w-[375px] pt-[130px] tablet:min-w-[600px]">
      { feedsCard }
    </div>
  )
}

export default Bookmarks
