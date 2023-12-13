import { MdClose } from "react-icons/md"
import noProfPic from "../assets/nopic.png"
import banner from "../assets/nobanner.jpg"
import { TbCameraPlus } from "react-icons/tb";
import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext.jsx"



function AddBookmark2(props){
  let { userProfile, hostUrl, user } = useContext(AuthContext)

  let newBookmark = new FormData()

  const [photo, setPhoto] = useState(false)
  const [bookmarkDet, setBookmarkDet] = useState({
    title:"",
    desc:""
  })


  function handleAddImage(e){
    setPhoto(e.target.files[0])
  }

  function removeImage(){
    setPhoto(false)
  }

  function handleAddDetails(e){
    setBookmarkDet((prev)=>{
      return(
        {...prev, [e.target.name]:e.target.value }
      )
    })
  }

  let addBookmark = async(id) => {
    let res = await fetch(`http://127.0.0.1:8000/api/bookmarks/v1/add/${id}/`, {
      method:'POST',
      body: newBookmark
    })

    let data = await res.json()
    console.log(".>>>", data)

    if (res.status === 200){
      alert("Bookmark Added Successfully !")
      props.getBookmarks(id)
      
    }else{
      alert("Process Failed")
    }
  }

  function saveChanges(){
    newBookmark.append('image', photo)
    newBookmark.append('title', bookmarkDet.title)
    newBookmark.append('desc', bookmarkDet.desc)

    addBookmark(user.user_id)

    setPhoto(false)
    setBookmarkDet( {
    title:"",
    desc:""
  })

  }

  return (
    <div className="inset-x-0 h-screen bg-[#220e0acc] fixed z-50 flex items-center justify-center">
      <div className="w-[350px] h-[600px] tablet:w-[450px] bg-white rounded-[2rem] shadow-sm overflow-hidden">
        <div className="w-full h-[4rem] flex items-center">
          <div className="w-[32px] h-[32px] bg-white rounded-full ml-4 hover:bg-[#d6dee2] cursor-pointer flex items-center justify-center transition duration-300" onClick={ props.addBookComp }>
            <MdClose className="text-2xl text-[#220e0a]"/>
          </div>
        </div>

        <div className="w-full h-[5rem] flex items-center justify-between px-5">
          <div className="w-[4rem] h-[4rem] rounded-full shadow-sm overflow-hidden">
            <img className="w-[4rem] h-[4rem] object-center object-cover"src={userProfile && userProfile.photo ? hostUrl + userProfile.photo : noProfPic } />
          </div>

          <div className="p-2 font-roboto font-semibold text-2xl w-[75%] text-[#220e0a] select-none">
            <span>Add a bookmark.</span>
          </div>
        </div>

        <div className="w-full h-[40%] flex items-center justify-center">
          <div className="w-[80%] h-[180px] rounded-[1rem] shadow-sm overflow-hidden flex items-center justify-center relative">
            <img className="w-full h-full object-cover object-center" src={ photo ? URL.createObjectURL(photo) : banner } />
            <div className="p-2 flex justify-between absolute">
              { !photo ? 
              <label htmlFor="uploadBanner" className="w-[50px] h-[50px] hover:bg-[#60291c] text-white rounded-full flex items-center justify-center cursor-pointer transition duration-300 bg-[#220e0a]">
                <TbCameraPlus className="text-[2rem]"/>
                <input type="file" className="hidden" id="uploadBanner"  name="photo" onChange={ handleAddImage }/>
              </label>
              :
              <div className="w-[50px] h-[50px] hover:bg-[#60291c] text-white rounded-full flex items-center justify-center cursor-pointer transition duration-300 bg-[#220e0a]" onClick={ removeImage }>
                <MdClose className="text-[2rem]"/>          
              </div>
              }
            </div>
          </div>
        </div>

        <div className="w-full h-[150px] font-roboto px-5 flex flex-col justify-evenly">
          <div>
            <input className="border-0 pl-2 h-[3.4rem] w-full placeholder:font-semibold placeholder:text-[#8c8686] placeholder:text-lg" type="text" placeholder="Add Bookmark Title" name="title" value={ bookmarkDet.title } onChange={ handleAddDetails }/>
          </div>

          <div>
            <input className="border-0 pl-2 h-[3.4rem] w-full placeholder:font-semibold placeholder:text-[#8c8686] placeholder:text-lg" type="text" placeholder="Add Bookmark Description" name="desc" value={ bookmarkDet.desc } onChange={ handleAddDetails } />
          </div>

        </div>

        <div className="w-full h-[4rem] font-roboto font-semibold text-xl text-white px-5 flex justify-end">
          <span className={ (photo && bookmarkDet.title != "" && bookmarkDet.desc != "") ? "h-[3rem] px-5 py-3 bg-[#220e0a] rounded-[1.3rem] cursor-pointer" : "h-[3rem] px-5 py-3 bg-[#220e0a] rounded-[1.3rem] select-none pointer-events-none opacity-60" } onClick={ saveChanges }>Post</span>
        </div>

      </div>
    </div>
  )
}

export default AddBookmark2
