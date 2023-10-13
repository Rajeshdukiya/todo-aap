"use client"
import { useState } from "react"



export default function Home() {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState("")


  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}])
    // console.log(title)
    // console.log(desc)
    settitle("")
    setdesc("")
  }

  let renderTask = <h2>No Task Available</h2>

if (mainTask.length>0) {

  renderTask = mainTask.localeCompare((t,i)=>{
      return (
        <li>
        <div className="flex justify-between mb-5">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-xl font-semibold">{t.desc}</h6>
       </div>
       </li>
  )
  })
}

  return (
    <>
    <h1 className='text-5xl bg-black text-white text-center m-5 font-bold'>My Todo  list</h1>
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" className="text-2xl border-zinc-800 border-2 my-5 px-4 py-2 m-5"
        placeholder="Enter task here"
        value={title}
        onChange={(e) => {
          settitle(e.target.value)
        }}
        />
        <input type="text" className="text-2xl border-zinc-800 border-2 my-5 px-4 py-2 m-5"
        placeholder="Enter Description here"
        value={desc}
        onChange={(e) =>{
          setdesc(e.target.value)
        }}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">Add Task</button>
      </form>
      <hr/>
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </div>
    </>
  )
}
