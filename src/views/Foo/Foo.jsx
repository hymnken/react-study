// import React from 'react'
// import { useParams } from 'react-router-dom'
// import store from '../../store'
// import { useState } from 'react';
// export default function Foo() {
//   /* const params = useParams()/*  */
//   const [count, setCount] = useState(store.getState().count)
//   const handleClick = () => {
//     store.dispatch({
//       type: 'inc'
//     })
//   }
//   store.subscribe(() => {
//     setCount(store.getState().count)
//   })
//   return (
//     <div>
//       <button onClick={handleClick}>123</button>
//       <div>Foo, {count}</div>
//     </div>
//   )
// }



import React from 'react'


export default function Foo() {
  const handleClick = () => {

  }


  return (
    <div>
      <button onClick={handleClick}>+1</button>
      <div>Foo,</div>
    </div>
  )
}
