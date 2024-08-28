import React from 'react'
import '../styles/leftside.css'
import { BsCart3, BsFillArrowRightSquareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import packedfood from '../assets/file.png'
import CartItemCard from './CartItemCard'

const LeftSide = ({ show }) => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const user = useSelector(state => state.user)

    return (
        <div className='leftside'>
            <div className="leftHeader">
                <div className="user-info">
                    {
                        user?.user ? (
                            <Link style={{ textDecoration: 'none' }} to="/profile"> <div className='user-profile-icon'>{user.user.name.charAt(0)}</div></Link>
                        ) : (
                            <Link style={{ textDecoration: 'none' }} to="/signin"> <button>Login</button></Link>
                        )
                    }
                </div>
                <Link style={{ textDecoration: 'none' }} to="/cart"><div className="icon">
                    <span>{cartItems ? cartItems?.length : 0}</span>
                    <BsCart3 />
                </div></Link>
            </div>
            {show ? null : (<div className="sidebar-msg">
                <div className="img">
                    <img src={packedfood} alt="" />
                </div>
                <div className="text">
                    <h4>Safe Delivery <span>@</span> your doors</h4>
                </div>
            </div>)}
            {show ? null : (<div className="side-cart-area">
                <div className="text">
                    <h4>Order Menu</h4>
                    <Link style={{ textDecoration: 'none' }} to='/cart'><p>View All <BsFillArrowRightSquareFill /></p></Link>
                </div>
                <div className='cart-area'>
                    <div className="all-items side-cart">
                        {cartItems.slice(0, 3).map((item) => (
                            <CartItemCard key={item.product} item={item} />
                        ))}
                        {cartItems.length > 0 && <Link style={{ textDecoration: 'none' }} to="/cart"><button>PROCEED TO CHECKOUT</button></Link>}
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default LeftSide
