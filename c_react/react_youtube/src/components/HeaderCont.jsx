import React from 'react'

import { Link } from 'react-router-dom'

import { SearchBar } from './'
import { AiFillYoutube } from 'react-icons/ai'

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <AiFillYoutube className="icon" /> Dev Youtube
        </Link>
      </h1>
      <SearchBar />
    </header>
  )
}

export default HeaderCont
