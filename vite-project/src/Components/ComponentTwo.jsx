import React from 'react'
import Componentthree from './Componentthree'

const ComponentTwo = ({ user }) => {
  // Fixed: Prevented automatic semicolon insertion
  return <Componentthree user={user} />
}

export default ComponentTwo