import { createContext, useState, useContext } from "react"

import { AuthContext } from "../contexts/AuthContext.jsx"


export const BookmarkCtx = createContext()

export default function BookmarksProvider(props){
  const [bookmarks, setBookmarks] = useState([])
  const [people, setPeople] = useState([])

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


