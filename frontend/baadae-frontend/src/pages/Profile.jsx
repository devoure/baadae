import SideBar from "../components/SideBar.jsx"
import ProfileComp from "../components/ProfileComp.jsx"
import TopBookmarks from "../components/TopBookmarks.jsx"
import EditProfile from "../components/EditProfile.jsx"

import { useState } from "react"

function Profile() {

  const [editActive, setEditActive] = useState(false)

  function openEdit(){
    setEditActive(true)
  }

  function closeEdit(){
    setEditActive(false)
  }

  return (
    <div className="w-screen h-max">
      <div className="w-full h-full relative flex tablet:justify-center tablet:items-start relative">
        <SideBar />
        <ProfileComp editActive={editActive} openEdit={openEdit}/>
        <TopBookmarks />
        <div className={ editActive ? "fixed inset-0 bg-[#220e0acc] flex items-center justify-center" : "hidden"  }>
          <EditProfile closeEdit={closeEdit}/>
        </div>
      </div>
    </div>
  )
}

export default Profile
