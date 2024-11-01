import React from 'react'

export default function Spinner() {
  //TODO: we should use toast instead; it looks cool
  return (
    <div>
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">  </svg>
  Loading...
    </div>
    )
}
