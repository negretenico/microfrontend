import React from 'react'
import '../index.scss'
export default function Header() {
  return (
<header className="fixed top-0 left-0 w-full">
<div className="p-2 bg-zinc-900 text-white text-base font-bold">
      <div className="flex">
        <div className="flex-grow flex">
            Home 
        </div>
        <div className="flex-end relative">
            Logo
        </div>
      </div>
    </div>
    </header>
  )
}
