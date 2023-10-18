import FeedComponent from "../components/FeedComponent.jsx"
import SideBar from "../components/SideBar.jsx"
import TopBookmarks from "../components/TopBookmarks.jsx"

function FeedDetail() {
  return (
    <div className="w-screen h-max">
      <div className="w-full h-full relative flex tablet:justify-center tablet:items-start">
        <SideBar />
        <FeedComponent />
        <TopBookmarks />
      </div>
    </div>
  )
}

export default FeedDetail
