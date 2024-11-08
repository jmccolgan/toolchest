import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadPreviews, loadUserDetails } from './newsSlice'
import { redditAuthorized } from '../../utils/redditAuth'

const news = () => {
  redditAuthorized()  
  const dispatch = useDispatch()
  dispatch(loadUserDetails())

    useEffect( () => {
        dispatch(loadPreviews())

    },[dispatch])
    
    return (

    <div>news</div>
  )
}

export default news