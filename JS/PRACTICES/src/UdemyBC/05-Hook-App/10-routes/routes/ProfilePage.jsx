import React from 'react'
import { useParams } from 'react-router-dom'

export const ProfilePage = () => {
  const {profileID} = useParams();

  return (
    <h1>Profile page {profileID}</h1>
  )
}
