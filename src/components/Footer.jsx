import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
const year = new Date().getFullYear();

  return (
    <div style={{textAlign:"center"}}> All right reserve @ Grammer Guru | {year} | <Link style={{color:"yellow"}} to="https://mdsoliman64.github.io/me/"> About me </Link> </div>
  )
}
