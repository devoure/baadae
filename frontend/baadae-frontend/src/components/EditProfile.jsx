import { useContext, useState } from "react"

import { MdClose } from "react-icons/md"
import { TbCameraPlus } from "react-icons/tb";

import { AuthContext } from "../contexts/AuthContext.jsx"


function EditProfile(props){

  let { userProfile, userCred } = useContext(AuthContext)

  const [editedProf, setEditedProf] = useState(userProfile)
  const [editedUser, setEditedUser] = useState(userCred)

  const [changes, setChanges] = useState({})

  function handleEditProf(e){
    setEditedProf((prev)=>{
      return(
        {...prev, [e.target.name]:e.target.value}
      )
    })
  }

  function handleEditUser(e){
    setEditedUser((prev)=>{
      return(
        {...prev, [e.target.name]:e.target.value}
      )
    })
  }

  function saveChanges(){
    setChanges({
      profile:{
        bio:editedProf.bio,
        photo:editedProf.photo,
        banner:editedProf.banner,
        location:editedProf.location
      },
      user:{
        first_name:editedUser.first_name,
        last_name:editedUser.last_name
      }
    })
    console.log(changes)
  }

  return (
    <div className="min-w-[350px] h-[550px] tablet:min-w-[450px] laptop:min-w-[450px] desktop:min-w-[550px] desktop:min-h-[700px] min-h-[550px] tablet:min-h-[700px] laptop:min-h-[550px] bg-white rounded-[2rem] shadow-sm flex flex-col items-center justify-between overflow-hidden font-roboto">
      <div className="w-full h-[10%] flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-[32px] h-[32px] bg-white rounded-full ml-4 hover:bg-[#d6dee2] cursor-pointer flex items-center justify-center transition duration-300" onClick={ props.closeEdit }>
            <MdClose className="text-2xl text-[#220e0a]"/>
          </div>

          <div className="ml-4 font-roboto text-[#220e0a] font-semibold text-xl select-none">
            <span>Edit Profile</span>
          </div>
        </div>

        <div className="mr-4">
          <span className="py-2 px-4 bg-[#220e0a] text-white font-roboto rounded-[2rem] cursor-pointer hover:bg-[#64281d] font-semibold transition duration-300" onClick={ saveChanges }>Save</span>
        </div>

      </div>

      <div className="bg-black w-[95%] h-[30%] relative flex items-center justify-center">
        <div className="w-[120px] h-[50px] flex justify-between">
          <label htmlFor="uploadBanner" className="w-[50px] h-[50px] hover:bg-[#d6dee2] text-white hover:text-[#220e0a] rounded-full flex items-center justify-center cursor-pointer transition duration-300">
            <TbCameraPlus className="text-[2rem]"/>
            <input type="file" className="hidden" id="uploadBanner" value={ editedProf.banner } name="banner" onChange={ handleEditProf }/>
          </label>

          <div className="w-[50px] h-[50px] hover:bg-[#d6dee2] text-white hover:text-[#220e0a] rounded-full flex items-center justify-center cursor-pointer transition duration-300">
             <MdClose className="text-[2rem]"/>          
          </div>
        </div>
        <div className="absolute bg-black w-20 h-20 bottom-[-2.4rem] left-2 rounded-full border-white border-4 flex justify-center items-center">
          <label htmlFor="uploadProf" className="p-2 hover:bg-[#d6dee2] text-white hover:text-[#220e0a] rounded-full flex items-center justify-center cursor-pointer transition duration-300">
            <TbCameraPlus className="text-[1.8rem]"/>
            <input type="file" className="hidden" id="uploadProf" value={ editedProf.photo } name="photo" onChange={ handleEditProf }/>
          </label>
        </div>
      </div>

      <div className="w-[95%] h-[3.4rem] border-2 border-[#d6dee2] mt-[3rem] rounded-sm flex flex-col justify-between">
        <span className="text-xs font-semibold text-[#888c8c] ml-4 block ">First Name</span>
        <input type="text" className="flex h-[2.4rem] w-full border-0 pl-2" value={ editedUser.first_name } name="first_name" placeholder={ editedUser.first_name } onChange={ handleEditUser }/>
      </div>

      <div className="w-[95%] h-[3.4rem] border-2 border-[#d6dee2] rounded-sm flex flex-col justify-between">
        <span className="text-xs font-semibold text-[#888c8c] ml-4 block ">Last Name</span>
        <input type="text" className="flex h-[2.4rem] w-full border-0 pl-2"  value={ editedUser.last_name } name="last_name" placeholder={ editedUser.last_name } onChange={ handleEditUser }/>
      </div>

      <div className="w-[95%] h-[5rem] border-2 border-[#d6dee2] rounded-sm flex flex-col justify-between">
        <span className="text-xs font-semibold text-[#888c8c] ml-4 block ">Bio</span>
        <input type="text" className="flex h-[2.4rem] w-full border-0 pl-2"  value={ editedProf.bio } name="bio" placeholder={ editedProf.bio } onChange={ handleEditProf }/>
      </div>

      <div className="w-[95%] h-[3.4rem] border-2 border-[#d6dee2] mb-5 rounded-sm flex flex-col justify-between">
        <span className="text-xs font-semibold text-[#888c8c] ml-4 block ">Location</span>
        <input type="text" className="flex h-[2.4rem] w-full border-0 pl-2"  value={ editedProf.location } name="first_name" placeholder={ editedProf.location } onChange={ handleEditProf } />
      </div>

    </div>
  )
}

export default EditProfile
