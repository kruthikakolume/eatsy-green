import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiMenuAlt1 } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { searchProducts, showSideBar } from '../actions'
import Spinner from './Spinner'

const Header = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const search = useSelector(state => state.search)
    const dispatch = useDispatch()
    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(searchProducts(name))
        navigate(`/search?=${name}`)
    }

    return (
        <div className='header'>
            <div className="burger" onClick={() => dispatch(showSideBar(true))}>
                <HiMenuAlt1 />
            </div>
            <div className="logo">
                <Link style={{textDecoration: 'none'}} to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <form onSubmit={handleSearch} className="search-bar">
                <div className="input">
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Search For Food' />
                    {search?.loading ? (<div>
                        <Spinner />
                    </div>) : <FiSearch onClick={handleSearch} />}
                </div>
            </form>
        </div>
    )
}

export default Header
