import profPic from "../assets/nopic.png"
import siteLogo from "../assets/sitelogo.png"
import Bookmarks from "../components/Bookmarks.jsx"
import People from "../components/People.jsx"
import Feed from "../components/Feed.jsx"
import SideBar from "../components/SideBar.jsx"
import TopBookmarks from "../components/TopBookmarks.jsx"
import AddBookmark from "../components/AddBookmark.jsx"
import AddBookmark2 from "../components/AddBookmark2.jsx"

import { IoMdArrowRoundBack } from "react-icons/io"
import { AiFillBell } from "react-icons/ai"
import { BsBookmarkFill } from "react-icons/bs"
import { BiSolidUser } from "react-icons/bi"

import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import { AuthContext } from "../contexts/AuthContext.jsx"
import { BookmarkCtx } from "../contexts/BookmarkCtx.jsx"

function Dashboard() {
  const { logOutUser, user, userProfile, userCred, hostUrl } = useContext(AuthContext)
  const { bookmarks, getBookmarks } = useContext(BookmarkCtx)
  

  const [activeComp, setActiveComp] = useState({
    "feed":true,
    "people":false,
    "bookmarks":false
  })

  const [sideBar, setSideBar] = useState(false)

  const [showBookmark, setShowBookmark] = useState(false)
  const [showOtherBookmark, setShowOtherBookmark] = useState(false)

  function addBookmarkComp(){
    setShowBookmark((prev)=>{
      return ( !prev )
    })
  }

  function addBookComp(){
    setShowOtherBookmark((prev)=>{
      return ( !prev )
    })
  }

  function setActive(e){
    const value = e.target.id
    if (value == "feed"){
      setActiveComp({
        "feed":true,
        "people":false,
        "bookmarks":false
      })
    }
    else if (value == "people"){
      setActiveComp({
        "feed":false,
        "people":true,
        "bookmarks":false
      })
    }
    else{
      setActiveComp({
        "feed":false,
        "people":false,
        "bookmarks":true
      })
    }
  }
  useEffect(()=>{
    getBookmarks(user.user_id)
  }, [])

  return (
    <div className="w-screen h-max relative">
      { showBookmark &&  <AddBookmark addBookmarkComp={ addBookmarkComp }/> }
      { showOtherBookmark && <AddBookmark2 addBookComp={ addBookComp } getBookmarks= { getBookmarks }/> }
      <div className={ (showBookmark || showOtherBookmark) ? "blur-sm w-full h-full relative flex tablet:justify-center tablet:items-start z-10" : "w-full h-full relative flex tablet:justify-center tablet:items-start z-10" }>
        <SideBar addBookComp={ addBookComp } />

        <div className={ sideBar ? "fixed z-50 inset-y-0 left-0 w-80 bg-white tablet:hidden flex flex-col justify-between overflow-hidden border-r-2 border-[#220e0a] pr-2 transition-all duration-500" : "fixed z-10 inset-y-0 left-0 w-0 bg-white tablet:hidden flex flex-col justify-between overflow-hidden transition-all duration-500" }>

          <div className="flex h-16 items-center justify-end">
            <div className="h-12 w-12 flex items-center justify-center hover:bg-[#220e0a] cursor-pointer rounded-full text-[#220e0a] hover:text-white transition duration-300" onClick={ ()=>setSideBar(false) }>
              <IoMdArrowRoundBack className="text-4xl"/>
            </div>
          </div>

          <div className="flex h-16 w-full items-center pl-[3rem] mt-[-80px]">

            <div className="w-16 h-16">
              <img src={ siteLogo } className="w-full h-full object-cover"/>
            </div>

            <div>
              <span className="font-semibold font-roboto text-2xl ml-4 text-[#220e0a] select-none">baadae</span>
            </div>

          </div>

          <div className="flex flex-col h-[300px] w-full">
            <div className="flex items-center pl-[3rem]">
              <div className="w-16 h-16 flex items-center justify-center relative">
                <span className="absolute right-1 top-1 bg-[#d6a97d] w-7 h-7 flex items-center justify-center rounded-full font-roboto font-semibold text-[#220e0a] select-none">3</span>
                <AiFillBell className="text-4xl text-[#220e0a]"/>
              </div>

              <div>
                <span className="font-roboto text-xl ml-4 text-[#220e0a] select-none whitespace-nowrap">New Feed</span>
              </div>
            </div>

            <div className="flex items-center pl-[3rem]">
              <div className="w-16 h-16 flex items-center justify-center relative">
                <span className="absolute right-1 top-1 bg-[#d6a97d] w-7 h-7 flex items-center justify-center rounded-full font-roboto font-semibold text-[#220e0a] select-none">5</span>
                <BsBookmarkFill className="text-3xl text-[#220e0a]"/>
              </div>

              <div>
                <span className="font-roboto text-xl ml-4 text-[#220e0a] select-none whitespace-nowrap">My Bookmarks</span>
              </div>
            </div>

            <Link to={'/profile'} className="flex items-center pl-[3rem] hover:bg-[#e4dedc] cursor-pointer hover:border-r-4 border-[#220e0a] transition duration-300">
              <div className="w-16 h-16 flex items-center justify-center">
                <BiSolidUser className="text-4xl text-[#220e0a]"/>
              </div>

              <div>
                <span className="font-roboto text-xl ml-4 text-[#220e0a] whitespace-nowrap">Visit Profile</span>
              </div>
            </Link>

          </div>
          
          <div className="flex h-16 w-full items-center justify-center mt-[-80px]">
            <span className="font-semibold font-roboto text-xl bg-[#220e0a] text-[#d6a97d] p-2 px-8 rounded-3xl cursor-pointer" onClick={ addBookmarkComp } >Bookmark</span>
          </div>

          <div className="flex h-32 w-full items-center pl-[3rem]">
            <div className="h-16 w-16 bg-black rounded-full bg-white">
              <img src={ userProfile && userProfile.photo ? hostUrl + userProfile.photo : profPic } className="object-cover h-full w-full rounded-full" />
            </div>

            <div className="flex  flex-col h-16 font-roboto font-semibold text-xl ml-4">
              <span className="text-[220e0a] select-none">{ userCred && userCred.first_name + " " + userCred.last_name }</span>
              <span className="text-red-700 text-lg text-center cursor-pointer hover:border-b-4 border-[#220e0a]" onClick={ logOutUser }>Log out</span>
            </div>
          </div>

        </div>

        <div className="">
        <div className="flex flex-col h-[130px] tablet:h-[140px] justify-between min-w-[375px] w-full border-b border-[#baaf98] fixed z-10 backdrop-blur-xl bg-white/95 tablet:max-w-[600px]">

          <div className="w-full h-[130px] hidden tablet:flex items-center justify-start pl-5 font-roboto font-semibold text-3xl">
            <span>Dashboard</span>
          </div>

          <div className="flex w-full h-[80px] tablet:hidden">
            <div className="flex h-full w-[40%] items-center pl-5">
              <img src={ userProfile && userProfile.photo ? hostUrl + userProfile.photo : profPic  } className="h-[3rem] w-[3rem] object-cover object-center rounded-full cursor-pointer hover:border-2 border-[#220e0a] transition duration-300" onClick={ ()=>setSideBar(true) }/>
            </div>

            <div className="flex h-full w-[60%] items-center">
              <img src={ siteLogo } className="h-[5rem] w-[5rem] object-cover rounded-full" />
            </div>
          </div>

          <div className="flex w-full h-[40px] text-center justify-evenly font-roboto text-lg font-semibold">

            <span className={ activeComp.feed ?  "text-[#220e0a] p-2 border-b-4 border-[#220e0a] cursor-pointer" : "text-[#baaf98] p-2 cursor-pointer" } onClick={ setActive } id="feed" >Feed</span>
            <span className={ activeComp.people ?  "text-[#220e0a] p-2 border-b-4 border-[#220e0a] cursor-pointer" : "text-[#baaf98] p-2 cursor-pointer" } onClick={ setActive } id="people">People</span>
            <span className={ activeComp.bookmarks ?  "text-[#220e0a] p-2 border-b-4 border-[#220e0a] cursor-pointer" : "text-[#baaf98] p-2 cursor-pointer" } onClick={ setActive } id="bookmarks">Bookmarks</span>

          </div>

        </div>

        { activeComp.feed && <Feed /> }
        { activeComp.people && <People /> }
        { activeComp.bookmarks && <Bookmarks bookmarks = { bookmarks } getBookmarks = { getBookmarks }/> }
      </div>

      <TopBookmarks />

      </div>
    </div>
  )
}

export default Dashboard
