import React, { createContext, useEffect, useState } from 'react'
let LoginDetails=createContext();
export default function LoginContext({children}) {
let oldToken=localStorage.getItem('token') ?? ''

 let [token,setToken]=useState(oldToken)
 let user={
    token,
    setToken
 }

 useEffect(()=>{
    localStorage.setItem('token',token)
 },[token])

  return (
    <LoginDetails.Provider value={user}>
        {children}
    </LoginDetails.Provider>
  )
}
export {LoginDetails}