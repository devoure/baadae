import { createContext, useState, useEffect, useRef } from "react"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export default function AuthProvider(props){
  let [authToken, setAuthToken] = useState(()=> localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null)
  let [user, setUser] = useState(()=> localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null)
  let [loading, setLoading] = useState(true)

  let [userCred, setUserCred] = useState(()=> localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null)

  let [userProfile, setUserProfile] = useState(()=> localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : null)

  let navigate = useNavigate()

  useEffect(()=>{
    if (user != null){
      let res = getUserData()

      console.log(">>>>>", res)
      setUserCred(res.userData)
      setUserProfile(res.userProfile)
    }
  }, [userCred, userProfile])

  function getUserData(){
    let userRes 
    let profRes 
    fetch(`http:/127.0.0.1:8000/api/accounts/v1/users/${user.id}/`)
      .then(res => { return res.json() })
      .then(data => userRes = data)
    fetch(`http:/127.0.0.1:8000/api/accounts/v1/profiles/${user.id}/`)
      .then(res => { return res.json() })
      .then(data => profRes = data)

      return { userRes, profRes}

  }

/*  let getUserData = async() => {
    let userCredRes = await fetch(`http://127.0.0.1:8000/api/accounts/v1/users/${user.id}/`)
    let userData = await userCredRes.json()
    if (userCredRes.status === 200){
      localStorage.setItem('userData', JSON.stringify(userData))
    }

    let res = await fetch(`http://127.0.0.1:8000/api/accounts/v1/profiles/${user.id}/`)
    let data = await res.json()
    if (res.status === 200){
      localStorage.setItem('userProfile', JSON.stringify(data))
    }
    return { userData, data }
  }*/

  let loginUser = async (e, loginCred) => {
    e.preventDefault()

    let response = await fetch('http://127.0.0.1:8000/api/accounts/v1/token/', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(loginCred)
    })

    let data = await response.json()
    if (response.status === 200){
      setAuthToken(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('authToken', JSON.stringify(data))
//      getUserData(jwt_decode(data.access).user_id)
      navigate("/baadae")
    }else{
      alert("Something went wrong")
    }
  }

  let logOutUser = () =>{
    setAuthToken(null)
    setUser(null)
    setUserCred(null)
    setUserProfile(null)
    localStorage.removeItem('authToken')
    localStorage.removeItem('userProfile')
    localStorage.removeItem('userData')
    navigate("/")
  }

  let createAccount = async (e, accountCred) => {
    e.preventDefault()

    let response = await fetch('http://127.0.0.1:8000/api/accounts/v1/user/add', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(accountCred)
    })

    let data = await response.json()
    if (data === "OK"){
      navigate("/success")
    }else{
      alert("Something went wrong, try again !")
    }
  }

  let updateToken = async ()=> {
    let response = await fetch('http://127.0.0.1:8000/api/accounts/v1/token/refresh/', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({'refresh':authToken?.refresh})
    })

    let data = await response.json()

    if (response.status === 200){
      setAuthToken(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('authToken', JSON.stringify(data))
    }else{
      logOutUser()
    }

    if (loading){
      setLoading(false)
    }
  }

  let contextData = {
    user: user,
    userCred:userCred,
    userProfile:userProfile,
    authToken: authToken,
    loginUser: loginUser,
    logOutUser: logOutUser,
    createAccount: createAccount
  }

  useEffect(()=>{
    if(loading){
      updateToken()
    }

    let fourMins = 1000 * 60 * 4
    let interval = setInterval(()=>{
      if(authToken){
        updateToken()
      }
    }, fourMins)
    return ()=> clearInterval(interval)
  }, [authToken, loading])

  return(
    <AuthContext.Provider value = { contextData } >
      { loading ? null : props.children }
    </AuthContext.Provider>
  )
}


