import React from 'react'
import Navbar from '../components/Navbar'

function layout({children}:{children: React.ReactNode}) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      </div>
  )
}

export default layout