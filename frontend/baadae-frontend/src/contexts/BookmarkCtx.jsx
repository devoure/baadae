import { createContext, useState, useContext } from "react"

import { AuthContext } from "../contexts/AuthContext.jsx"


export const BookmarkCtx = createContext()

export default function BookmarksProvider(props){
  const [bookmarks, setBookmarks] = useState([])
  const [people, setPeople] = useState([])
  const [feeds, setFeeds] = useState([])
  const [userBookmarks, setUserBookmarks] = useState([])

  let { user } = useContext(AuthContext)

  let getPeople = async() => {
    let res = await fetch(`http://127.0.0.1:8000/api/accounts/v1/users/`)
    let data = await res.json()
    if (res.status === 200){
      let filteredData = data.filter(filterPeople)
      setPeople(filteredData)
    }
  }
  function filterPeople(person){
    return person["user"].id != user.user_id
  }
  let getBookmarks = async ()=> {
    let res = await fetch(`http://127.0.0.1:8000/api/bookmarks/v1/get/`) 
    let data = await res.json()
    if ( res.status === 200 ){
      console.log(">>>", data)
      setBookmarks(data)
    }
  }
  let getUserBookmarks = async (id)=> {
    let res = await fetch(`http://127.0.0.1:8000/api/bookmarks/v1/get/${id}/`) 
    let data = await res.json()
    if ( res.status === 200 ){
      setUserBookmarks(data)
    }
  }
  let getFeeds = async (id)=> {
    let res = await fetch(`http://127.0.0.1:8000/api/actions/v1/feeds/${id}/`) 
    let data = await res.json()
    if ( res.status === 200 ){
      setFeeds(data)
    }
  }

  let contextData = {
    bookmarks : bookmarks,
    getBookmarks : getBookmarks,
    getPeople : getPeople,
    getFeeds : getFeeds,
    feeds : feeds,
    people: people,
    getUserBookmarks : getUserBookmarks,
    userBookmarks : userBookmarks
  }
  return(
    <BookmarkCtx.Provider value = { contextData } >
      { props.children }
    </BookmarkCtx.Provider>
  )
}


