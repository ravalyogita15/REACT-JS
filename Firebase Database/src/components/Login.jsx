import { signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../Services/firebase'
import GoogleButton from 'react-google-button'
import { useAuthState } from 'react-firebase-hooks/auth';
// const [user, loading, error] = useAuthState(auth, options);
// import { signOut } from "firebase/auth";

const Login = () => {
  const [user]=useAuthState(auth)
  const handleclick=()=>{
    signInWithPopup(auth,provider)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const handleLogOut=()=>{
    signOut(auth).then((res)=>{
      alert("logOut")
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className='login'>
      <br>
      </br>
      <h1>Login Form</h1>
      <div style={{marginLeft:"25%"}}>
      <GoogleButton onClick={handleclick}>LoginwithGoogle</GoogleButton>
      </div>
      <br />
      <button onClick={handleLogOut}>logOut</button>
    </div>
  )
}

export default Login