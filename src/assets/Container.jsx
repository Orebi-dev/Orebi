import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={` md:px-0 px-4 mx-auto max-w-[1600px] ${className}`}>
      {children}
    </div>
  )
}

export default Container
