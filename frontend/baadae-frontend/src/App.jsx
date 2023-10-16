import Login from './pages/Login.jsx'
import CreateAccount from './pages/CreateAccount.jsx'
import Success from './pages/Success.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NotFound from './pages/NotFound.jsx'
import Profile from './pages/Profile.jsx'

import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <Routes>
        <Route path = "/" >
          <Route path = "" element = { <Login /> } />
          <Route path = "create-account" element = { <CreateAccount /> } />
          <Route path = "success" element = { <Success /> } />
          <Route path ="profile" element = { <Profile /> } />
        </Route>

        <Route element= { <Dashboard /> } path = "/baadae" />
        <Route element= { <NotFound /> } path = "*" />
      </Routes>
    </>
  )
}

export default App
