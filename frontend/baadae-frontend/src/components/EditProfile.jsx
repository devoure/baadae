import { useContext, useState } from "react"

import noBanner from "../assets/nobanner.jpg"

import noProfPic from "../assets/nopic.png"

import { MdClose } from "react-icons/md"
import { TbCameraPlus } from "react-icons/tb";

import { AuthContext } from "../contexts/AuthContext.jsx"


function EditProfile(props){

  let { userProfile, userCred, getUserData, user, hostUrl } = useContext(AuthContext)

  const [editedProf, setEditedProf] = useState(userProfile)
  const [editedUser, setEditedUser] = useState(userCred)

  const [photo, setPhoto] = useState(false)
  const [banner, setBanner] = useState(false)

  let profChanges = new FormData()

  function handleEditUser(e){
    setEditedUser((prev)=>{
      return(
        {...prev, [e.target.name]:e.target.value}
      )
    })
  }

  function handlePhoto(e){
    setPhoto(e.target.files[0])
  }

  function handleBanner(e){
    setBanner(e.target.files[0])
  }

  function handleEditProf(e){
    setEditedProf((prev)=>{
      return(
        {...prev, [e.target.name]:e.target.value}
      )
    })
  }


  let editProfile = async(id) => {
    let res = await fetch(`http://127.0.0.1:8000/api/accounts/v1/profiles/edit/${id}/`,{
      method:'POST',
      //headers:{
      //  'Content-Type':'multipart/form-data'
      //},
      body: profChanges
    })

    let updates = await res.json()
    if (res.status === 200){
      getUserData(id)
      alert("Profile Updated Successfully !")
    }else{
      alert("Profile Update Failed")
    }
  }

  function saveChanges(){
    profChanges.append('bio', editedProf.bio)
    photo && profChanges.append('photo', photo)
    banner && profChanges.append('banner', banner)
    profChanges.append('location', editedProf.location)
    profChanges.append('first_name', editedUser.first_name)
    profChanges.append('last_name', editedUser.last_name)


    console.log(">>", profChanges)
    editProfile(user.user_id)
  }

  return (
    <div className="min-w-[350px] h-[550px] tablet:min-w-[450px] laptop:min-w-[450px] desktop:min-w-[550px] desktop:min-h-[700px] min-h-[550px] tablet:min-h-[700px] laptop:min-h-[550px] bg-white rounded-[2rem] shadow-sm flex flex-col items-center justify-between overflow-hidden font-roboto">
      <div className="w-full h-[10%] flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-[32px] h-[32px] bg-white rounded-full ml-4 hover:bg-[#d6dee2] cursor-pointer flex items-center justify-center transition duration-300" onClick={ ()=>{
            setEditedProf(userProfile)
            setEditedUser(userCred)
            setBanner(false)
            setPhoto(false)
            props.closeEdit()
            } }>
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

      <div className={ "w-[95%] h-[30%] relative flex items-center justify-center "}>
        <img src={ userProfile && userProfile.banner ? hostUrl + userProfile.banner : noBanner }  className="object-center object-cover w-full h-full"/>
        <div className="w-[120px] h-[50px] flex justify-between absolute">
          <label htmlFor="uploadBanner" className="w-[50px] h-[50px] hover:bg-[#d6dee2] text-white hover:text-[#220e0a] rounded-full flex items-center justify-center cursor-pointer transition duration-300 bg-[#969898]">
            <TbCameraPlus className="text-[2rem]"/>
            <input type="file" className="hidden" id="uploadBanner" name="banner" onChange={ handleBanner }/>
          </label>

          <div className="w-[50px] h-[50px] hover:bg-[#d6dee2] text-white hover:text-[#220e0a] rounded-full flex items-center justify-center cursor-pointer transition duration-300 bg-[#969898]">
             <MdClose className="text-[2rem]"/>          
          </div>
        </div>
        <div className="absolute w-20 h-20 bottom-[-2.4rem] left-2 rounded-full border-white border-4 flex justify-center items-center overflow-hidden">
          <img src={  userProfile && userProfile.photo ? hostUrl + userProfile.photo : noProfPic  } className="w-full h-full object-center object-cover"/>
          <label htmlFor="uploadProf" className="p-2 hover:bg-[#d6dee2] text-white hover:text-[#220e0a] rounded-full flex items-center justify-center cursor-pointer transition duration-300 bg-[#969898] absolute">
            <TbCameraPlus className="text-[1.8rem]"/>
            <input type="file" className="hidden" id="uploadProf" name="photo" onChange={ handlePhoto }/>
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
        <input type="text" className="flex h-[2.4rem] w-full border-0 pl-2"  value={ editedProf.location } name="location" placeholder={ editedProf.location } onChange={ handleEditProf } />
      </div>

    </div>
  )
}

export default EditProfile
