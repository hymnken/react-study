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
import { useSelector, useDispatch } from 'react-redux'

export default function Foo() {
  const count = useSelector((state) => state.counter.count)
  const msg = useSelector((state) => state.message.msg)
  const upperMsg = useSelector((state) => state.message.upperMsg)
  const doubleCount = useSelector((state) => state.counter.doubleCount)
  const dispatch = useDispatch()
  const handleClick = () => {
/*     dispatch({
      type: 'counter/inc',
      payload: 5
    })
    dispatch({
      type: 'message/change',
      payload: 'hi'
    }) */

    dispatch((dispatch) => {
      setTimeout(() => {
        dispatch({
          type: 'counter/inc',
          payload:5
        })
      },2000)
    })
  }
  return (
    <div>
      <button onClick={handleClick}>点击</button>
      <div>Foo,{count},{doubleCount},{msg},{upperMsg}</div>
    </div>
  )
}
