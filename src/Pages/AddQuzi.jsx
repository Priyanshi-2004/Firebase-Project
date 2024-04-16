import React from 'react'
import Header from '../Header'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";
import { v4 } from 'uuid';
import { app } from '../firebaseConfig';
export default function AddQuzi() {

  let addQuizData=(event)=>{
    event.preventDefault();
         const db = getDatabase(app);
        let data={
            question:event.target.question.value,
            optionA:event.target.optionA.value,
            optionB:event.target.optionB.value,
            optionC:event.target.optionC.value,
            optionD:event.target.optionD.value,
            currectAns:event.target.currectAns.value,

        }
   
        const id1 = v4();
        set(ref(db, 'quiz/' + id1), data );


       
  }  

  return (
    <div>
        <Header/>
       <div className='max-w-[500px] bg-white shadow-lg p-[15px] mx-auto'>
            <h1>Add Question</h1>
            <form onSubmit={addQuizData}>
                <div className='m-[10px_0px]'>
                    <label>Question</label>
                    <textarea className='w-[100%] h-[100px] border-[2px] border-[black]  ' name='question'></textarea>
                </div>
                <div className='m-[10px_0px]'>
                    <label>Option A</label>
                    <input type='text' className='w-[100%] h-[40px] border-[2px] border-[black]' name='optionA'/>
                </div>
                <div className='m-[10px_0px]'>
                    <label>Option B</label>
                    <input type='text' className='w-[100%] h-[40px] border-[2px] border-[black]' name='optionB'/>
                </div>
                <div className='m-[10px_0px]'>
                    <label>Option C</label>
                    <input type='text' className='w-[100%] h-[40px] border-[2px] border-[black]' name='optionC'/>
                </div>
                <div className='m-[10px_0px]'>
                    <label>Option D</label>
                    <input type='text' className='w-[100%] h-[40px] border-[2px] border-[black]' name='optionD'/>
                </div>
                <div className='m-[10px_0px]'>
                    <label>Correct Ans</label>
                    <input type='text' className='w-[100%] h-[40px] border-[2px] border-[black]' name='currectAns'/>
                </div>

                <button type='submit' class="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">Question</button>
            </form>
       </div>
       
    </div>
  )
}
