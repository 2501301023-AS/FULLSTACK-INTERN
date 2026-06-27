import React from 'react'
import Componentfour from './Componentfour'

// Fixed: Added { user } to the props object so it's accessible
const Componentthree = ({ user }) => {
  return <Componentfour user={user} />
}

export default Componentthree