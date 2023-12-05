import { MdClose } from "react-icons/md"


function AddBookmark(props){
  return (
    <div className="inset-0  bg-[#220e0acc] absolute z-50 flex items-center justify-center">
      <div className="w-[350px] h-[550px] bg-white rounded-[2rem] shadow-sm overflow-hidden">
        <div className="w-full h-[4rem] flex items-center">
          <div className="w-[32px] h-[32px] bg-white rounded-full ml-4 hover:bg-[#d6dee2] cursor-pointer flex items-center justify-center transition duration-300" onClick={ props.addBookmarkComp }>
            <MdClose className="text-2xl text-[#220e0a]"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBookmark
