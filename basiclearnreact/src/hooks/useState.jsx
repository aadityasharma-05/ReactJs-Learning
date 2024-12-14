import React from 'react'

const useState = () => {

  useState(() => {
    // run some code on component mount
    console.log('Component Mounted')
  })
  return (
    <div>
      <h1>hello world </h1>
    </div>
  )
}

export default useState
