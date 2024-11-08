import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadPreviews, getToken, setToken } from './newsSlice'
import { redditAuthorized } from '../../utils/redditAuth'

const news = () => {
  redditAuthorized()  
  const dispatch = useDispatch()

  // const token = useSelector(getToken)

  // dispatch(getToken)
  // if(!token){
  //   console.log(`no token`)
  //   dispatch(fetchToken(dispatch(setToken())))
  // }else{
  //   console.log(`token`)
  // }


    useEffect( () => {
        dispatch(loadPreviews())

    },[dispatch])
    
    return (

    <div>news</div>
  )
}

export default news