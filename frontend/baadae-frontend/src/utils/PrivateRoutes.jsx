import { Outlet, Navigate } from "react-router-dom"


function PrivateRoutes(){
  const isAuntheticated = false
  return(
    isAuntheticated ? <Outlet /> : <Navigate to="/" /> 
  )
}

export default PrivateRoutes
