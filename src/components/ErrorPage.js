import React from 'react'
import errorPicture from '../images/404-error.JPG'

export default function ErrorPage() {
  return (
    <div className='container-error-picture'><a href='/'><img src={errorPicture}  alt="" className="error-picture"/></a></div>
  )
}
