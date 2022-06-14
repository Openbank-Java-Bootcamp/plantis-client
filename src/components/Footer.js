import React from 'react'
import logo from '../images/logo.png'

export default function Footer() {
  return (
    <div>
        <footer className="footer">
    <a href="/"><img alt="logo-footer" src={logo} className="logo-footer" /></a>
    <p className="footername">Made by Carmen Valencia</p>
    </footer>
    </div>
  )
}
