import { useEffect, useState, useContext } from "react"
import { MdEmail } from "react-icons/md"
import { AiFillHeart } from "react-icons/ai"
import { BsBookmarkFill } from "react-icons/bs"
import { Link } from "react-router-dom"

import noProfPic from "../assets/nopic.png"
import { AuthContext } from "../contexts/AuthContext.jsx"
import { BookmarkCtx } from "../contexts/BookmarkCtx.jsx"

function People(){
  let { hostUrl } = useContext(AuthContext)
  let { people, getPeople } = useContext(BookmarkCtx)
  useEffect(()=>{
    getPeople()
  }, [])
  const peopleCard = people.map((person)=>{
    return(
      <Link to={`/people/${person.user.first_name}`} state={ {person:person} } className="flex h-32 tablet:h-40 w-full items-center pl-5 select-none cursor-pointer mb-5 hover:bg-[#ebebeb] transition duration-300" key={ person.user.id }>
        <img src={ person.profile.photo ? hostUrl + person.profile.photo : noProfPic } className="w-20 h-20 rounded-full object-cover"/>
        <div className="flex  flex-col pl-10 font-roboto">
          <span className="font-semibold font-[#220e0a] text-xl pb-2">{ person.user.first_name + " " +  person.user.last_name }</span>
          <div className="flex items-center">
            < MdEmail className="text-xl mr-3 text-[#d6a97d]"/>
            <span className="text-sm text-[#220e0a]">{ person.user.email }</span>
          </div>
          <div className="flex items-center">
            <AiFillHeart className="text-xl mr-3 text-[#d6a97d]"/>
            <span className="text-sm text-[#220e0a]">{ 44 } likes </span>
          </div>
          <div className="flex items-center">
            <BsBookmarkFill className="text-lg tablet:text-xl mr-3 text-[#d6a97d]"/>
            <span className="text-sm text-[#220e0a]">{ 5 } bookmarks</span>
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
