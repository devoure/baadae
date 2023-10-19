import BookmarkComp from "../components/BookmarkComp.jsx"
import SideBar from "../components/SideBar.jsx"
import TopBookmarks from "../components/TopBookmarks.jsx"

function BookmarkDetail() {
  return (
    <div className="w-screen h-max">
      <div className="w-full h-full relative flex tablet:justify-center tablet:items-start">
        <SideBar />
        <BookmarkComp />
        <TopBookmarks />
      </div>
    </div>
  )
}

export default BookmarkDetail
