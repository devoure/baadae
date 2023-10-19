import PeopleComp from "../components/PeopleComp.jsx"
import SideBar from "../components/SideBar.jsx"
import TopBookmarks from "../components/TopBookmarks.jsx"

function PeopleDetail() {
  return (
    <div className="w-screen h-max">
      <div className="w-full h-full relative flex tablet:justify-center tablet:items-start">
        <SideBar />
        <PeopleComp />
        <TopBookmarks />
      </div>
    </div>
  )
}

export default PeopleDetail
