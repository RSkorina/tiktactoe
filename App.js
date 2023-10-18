"use client"; // This is a client component 👈🏽

// import {useState} from 'react'

// function Square() {
//   const [value, setValue] = useState(null)

//   function handleClick() {
//     setValue('X')
//   }

//   return (
//     <button className="square" onClick={handleClick}>
//       {value}
//     </button>
//   )
// }

export default function Board() {

  return (<>
            <button className="square" onClick={handleClick}>X</button>    
        </>
  )
          
}