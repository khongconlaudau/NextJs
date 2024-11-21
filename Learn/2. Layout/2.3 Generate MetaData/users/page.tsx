import { Metadata } from 'next'
import React from 'react'

const Users = () => {
  return (
    <div>Users</div>
  )
}

export const generateMetadata = () : Metadata =>{
    return{
        title : "This is a user page",
        description: "All about the users"
    }
}

export default Users