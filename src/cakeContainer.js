import React from 'react'
import { useDispatch } from 'react-redux'
import { buyCake } from './redux/Actions/cakeAction'

export const CakeContainer = () => {
  const dispatch = useDispatch()
  return (
    <>
    <div>CakeContainer</div>
<button onClick={()=>{dispatch(buyCake(4,(value)=>{
console.log(value,"valuevalue")
}))}} >Add Cake</button>
    </>
  )
}
