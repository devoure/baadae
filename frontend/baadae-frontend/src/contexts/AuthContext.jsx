import { createContext, useState, useEffect } from "react"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export default function AuthProvider(props){
  let [authToken, setAuthToken] = useState(()=> localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null)
  let [user, setUser] = useState(()=> localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null)
  let [loading, setLoading] = useState(true)

  let navigate = useNavigate()

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
      navigate("/baadae")
    }else{
      alert("Something went wrong")
    }
  }

  let logOutUser = () =>{
    setAuthToken(null)
    setUser(null)
    localStorage.removeItem('authToken')
    navigate("/")
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
    authToken: authToken,
    loginUser: loginUser,
    logOutUser: logOutUser,
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


