import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSearch()
    }
  }

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <div className="search" onKeyPress={onKeyPress}>
      <label className="glass" htmlFor="searchInput">
        <FiSearch />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__searc"
        placeholder="개발자 유튜버를 검색하세요!"
        title="검색"
        value={searchTerm || ''}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
