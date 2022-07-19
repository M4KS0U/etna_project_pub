import React from 'react'
import profil from "./profil_icon.png"

export default function PrivateHome() {
  return (
    <div className="container p-5">
      <h1 className="display-3 text-light mb-4">
        PROFIL
      </h1>
      <img src={profil} />
    </div>
  )
}
