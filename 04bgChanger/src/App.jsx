import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className="w-full h-screen duration-300" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-200 rounded-full border-2 p-2">
            <button onClick={()=>setColor("red")} className="outline-none p-4 rounded-full border-red-950 border-2 text-white font-bold shadow-lg" style={{backgroundColor:"red"}}>
              red
            </button>
            <button onClick={()=>setColor("green")} className="outline-none p-4 rounded-full border-green-950 border-2 text-white font-bold shadow-lg" style={{backgroundColor:"green"}}>
              green
            </button>
            <button onClick={()=>setColor("blue")} className="outline-none p-4 rounded-full border-blue-950 border-2 text-white font-bold shadow-lg" style={{backgroundColor:"blue"}}>
              blue
            </button>
            <button onClick={()=>setColor("yellow")} className="outline-none p-4 rounded-full border-amber-700 border-2 text-olive-600 font-bold shadow-lg" style={{backgroundColor:"yellow"}}>
              yellow
            </button>
            <button onClick={()=>setColor("olive")} className="outline-none p-4 rounded-full border-olive-600 border-2 text-white font-bold shadow-lg" style={{backgroundColor:"olive"}}>
              olive
            </button>
            <button onClick={()=>setColor("black")} className="outline-none p-4 rounded-full border-red-950 border-2 text-white font-bold shadow-lg" style={{backgroundColor:"black"}}>
              black
            </button>
            <button onClick={()=>setColor("white")} className="outline-none p-4 rounded-full border-red-950 border-2 text-olive-600 font-bold shadow-lg" style={{backgroundColor:"white"}}>
              white
            </button>
            <button onClick={()=>setColor("orange")} className="outline-none p-4 rounded-full border-amber-600 border-2 text-white font-bold shadow-lg" style={{backgroundColor:"orange"}}>
              orange
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
