import SideBar from "../components/SideBar.jsx"
import ProfileComp from "../components/ProfileComp.jsx"
import TopBookmarks from "../components/TopBookmarks.jsx"
function Profile() {
  return (
    <div className="w-screen h-max">
      <div className="w-full h-full relative flex tablet:justify-center tablet:items-start">
        <SideBar />
        <ProfileComp />
        <TopBookmarks />
      </div>
    </div>
  )
}

export default Profile
