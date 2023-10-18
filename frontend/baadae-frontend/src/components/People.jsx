import people from "../assets/people.jsx"
import { MdEmail } from "react-icons/md"
import { AiFillHeart } from "react-icons/ai"
import { BsBookmarkFill } from "react-icons/bs"
import { Link } from "react-router-dom"

function People(){
  const peopleCard = people.map((person)=>{
    return(
      <Link to={`/people/${person.name}`} state={ person } className="flex h-32 tablet:h-40 w-full items-center pl-5 select-none cursor-pointer mb-5 hover:bg-[#ebebeb] transition duration-300" key={ person.id }>
        <img src={ person.profpic } className="w-20 h-20 rounded-full object-cover"/>
        <div className="flex  flex-col pl-10 font-roboto">
          <span className="font-semibold font-[#220e0a] text-xl pb-2">{ person.name }</span>
          <div className="flex items-center">
            < MdEmail className="text-xl mr-3 text-[#d6a97d]"/>
            <span className="text-sm text-[#220e0a]">{ person.email }</span>
          </div>
          <div className="flex items-center">
            <AiFillHeart className="text-xl mr-3 text-[#d6a97d]"/>
            <span className="text-sm text-[#220e0a]">{ person.likes } likes </span>
          </div>
          <div className="flex items-center">
            <BsBookmarkFill className="text-lg tablet:text-xl mr-3 text-[#d6a97d]"/>
            <span className="text-sm text-[#220e0a]">{ person.bookmarks } bookmarks</span>
          </div>
        </div>
      </Link>
    )
  })
  return (
    <div className="flex flex-col min-w-[375px] pt-[130px] tablet:min-w-[600px]">
      { peopleCard }
    </div>
  )
}

export default People
