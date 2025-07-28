import React, { ReactNode } from 'react'

export default function Layout ({children}:{children:ReactNode})  {
  return (
    <div>
          <div className="h-20 w-screen bg-white text-black">Navbar</div>
    
         {children}
     
        <div className="h-20 w-screen bg-white text-black flex justify-center items-end">Footer</div>
    </div>
  )
}
