// import React from 'react'
// import { useLocation, useSearchParams } from 'react-router-dom'
// export default function Bar() {
//   const [searchParams, setSearchParams] = useSearchParams()
//   const location = useLocation()
//   //console.log(location);
//   //console.log(searchParams.get('age'));
//   const handleClick = () => {
//     setSearchParams({ gender: 'male' })
//   }
//   return (
//     <div onClick={handleClick}>Bar</div>
//   )
// }


import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
export default function Bar() {
  const count = useSelector((state) => state.counter.count)
  return (
    <div>Bar,{count}</div>
  )
}
