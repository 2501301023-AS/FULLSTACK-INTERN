import React from 'react'
import ComponentTwo from './ComponentTwo'

const ComponentOne = () => {
  const user = "Sachin"
  // Fixed: Moved the component to the same line as return (or use parentheses)
  return <ComponentTwo user={user} />
}

export default ComponentOne