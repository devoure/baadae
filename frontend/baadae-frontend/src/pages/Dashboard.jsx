import profPic from "../assets/profpic.png"
import siteLogo from "../assets/sitelogo.png"

function Dashboard() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">

        <div className="flex flex-col h-[130px] min-w-[375px]">

          <div className="flex w-full h-[70%]">
            <div className="flex h-full w-[40%] items-center pl-5">
              <img src={ profPic } className="h-[3rem] w-[3rem] object-cover rounded-full cursor-pointer hover:border-2 border-[#220e0a] transition duration-300"/>
            </div>

            <div className="flex h-full w-[60%] items-center">
              <img src={ siteLogo } className="h-[5rem] w-[5rem] object-cover rounded-full" />
            </div>
          </div>

          <div className="flex w-full h-[30%] items-center justify-evenly font-roboto text-lg font-semibold">

            <span className="text-[#220e0a] p-2 border-b-4 border-[#220e0a] cursor-pointer">Feed</span>
            <span className="text-[#baaf98] p-2 cursor-pointer">People</span>
            <span className="text-[#baaf98] p-2 cursor-pointer">Bookmarks</span>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard
