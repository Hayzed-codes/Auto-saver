import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
import { FaBox } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <img src='https://api.logo.com/api/v2/images?logo=logo_d3420865-ea4b-410b-a2cd-51343c0c55e1&u=1715125842&width=500&height=400&fit=contain&margins=100&format=webp&quality=60'/><Link>HayMilda</Link>

      {/* <div>
        <button className='btn'>Connect Wallet</button>
      </div> */}
    </header>
  )
}

export default Header