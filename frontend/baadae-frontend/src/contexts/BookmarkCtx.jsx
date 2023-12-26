import { createContext, useState } from "react"

export const BookmarkCtx = createContext()

export default function BookmarksProvider(props){
  const [bookmarks, setBookmarks] = useState([])
  const [people, setPeople] = useState([])
  let getPeople = async() => {
    let res = await fetch(`http://127.0.0.1:8000/api/accounts/v1/users/`)
    let data = await res.json()
    if (res.status === 200){
      setPeople(data)
    }
  }
  let getBookmarks = async (id)=> {
    let res = await fetch(`http://127.0.0.1:8000/api/bookmarks/v1/get/${id}/`) 
    let data = await res.json()
    if ( res.status === 200 ){
      setBookmarks(data)
    }
  }
  let contextData = {
    bookmarks : bookmarks,
    getBookmarks : getBookmarks,
    getPeople : getPeople,
    people: people
  }
  return(
    <BookmarkCtx.Provider value = { contextData } >
      { props.children }
    </BookmarkCtx.Provider>
  )
}


