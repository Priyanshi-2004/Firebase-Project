import React, { useContext } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import { app } from '../firebaseConfig';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginDetails } from '../Context/LoginContext';
export default function Login() {
    let {token,setToken}=useContext(LoginDetails)
    let handleLogin=(event)=>{
        event.preventDefault();
        let email=event.target.email.value;
        let password=event.target.password.value;
        const auth = getAuth(app);
         signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setToken(user.accessToken)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
            });

    }

    let googleLogin=()=>{
    
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }

  return (
    <div>
        <Header/>
      
        <div class="bg-white rounded-lg overflow-hidden shadow-2xl max-w-[500px] mx-auto">
                 <h1 className='text-[30px] font-bold text-center'>LOGIN</h1>
                <div class="p-8">
                    <form method="POST" class="" onSubmit={handleLogin}>
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email</label>

                            <input type="text" name="email" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"/>
                        </div>
                
                        <div class="mb-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-600">Password</label>

                            <input type="text" name="password" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"/>
                        </div>

                        <button class="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">Login</button>


                        <button class="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow" type='button' onClick={googleLogin}>Google</button>
                    
                    
                    </form>
                </div>
                
                <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                    <Link to={'/register'} class="font-medium text-indigo-500">Create account</Link>

                   
                </div>
        </div>
        <ToastContainer />
    </div>
  )
}
