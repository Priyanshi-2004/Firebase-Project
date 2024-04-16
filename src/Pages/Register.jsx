import React from 'react'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Register() {
    let navigate=useNavigate();
    let handleregister=(event)=>{
        let email=event.target.email.value;
        let password=event.target.password.value;
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            toast.success("User Created.....")
            navigate('/')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage)
            // ..
        });

        event.preventDefault();
    }
  return (
    <div>
        <Header/>
        <div class="bg-white rounded-lg overflow-hidden shadow-2xl max-w-[500px] mx-auto">
                 <h1 className='text-[30px] font-bold text-center'>REGSITER</h1>
                <div class="p-8">
                    <form method="POST" class="" action="#" onSubmit={handleregister}>
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email</label>

                            <input type="text" name="email" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"/>
                        </div>
                
                        <div class="mb-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-600">Password</label>

                            <input type="text" name="password" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"/>
                        </div>

                        <button class="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">register</button>
                    </form>
                </div>
                
                <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                    <Link to={'/'} class="font-medium text-indigo-500">Login</Link>

                   
                </div>
        </div>
      
        <ToastContainer />
    </div>
  )
}
