//Cart Items
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../../styles/cart.css'
import SideBar from '../../components/SideBar'
import emtycart from '../../assets/emtycart.gif'
import CartItemCard from '../../components/CartItemCard'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import HeaderLogo from '../../components/HeaderLogo'
import bg from '../../assets/cartimg.png'


const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const cartPrice = cartItems.reduce((total, itm) => total + itm?.price * itm?.qty, 0)
    const deleviryPrice = (cartPrice > 20 || cartPrice === 0) ? 0 : 5
    const discount = 0;
    const totalPrice = (cartPrice + deleviryPrice) - discount;
    const auth = useSelector(state => state.user.user)
    const navigate = useNavigate()

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    const checkoutHandler = () => {
        if (auth) {
            navigate(`/shipping`)
        }
        else {
            navigate('/signin?redirect=shipping')
        }
    }

    return (
        <>
            <SideBar />
            <HeaderLogo />
            <div className='cart'>
            <div className='cart-screen'>
                {
                    cartItems?.length > 0 ? (
                        <div className='cartarea'>
                            <div className="allitems">
                            <h5>CART</h5>
                                {cartItems.map((item) => (
                                    <CartItemCard key={item.product} item={item} />
                                ))}
                            </div>
                            <div className="checkoutarea">

                                <div className="bill">
                                    <h5>PRICE DETAILS</h5>
                                    <div className="details">
                                        <div className="item">
                                            <p>Price</p>
                                            <p><span>$</span>{cartPrice}</p>
                                        </div>
                                        <div className="item">
                                            <p>Discount</p>
                                            <p>-<span>$</span>{discount}</p>
                                        </div>
                                        <div className="item">
                                            <p>Delivery Charges</p>
                                            <p>{deleviryPrice === 0 ? <span className='free'>Free</span> : <span>${deleviryPrice}</span>}</p>
                                        </div>
                                    </div>
                                    <div className="total">
                                        <p style={{fontWeight: 'bold', color: 'black'}}>Total</p>
                                        <p style={{fontWeight: 'bold', color: 'black'}}><span>$</span>{totalPrice}</p>
                                    </div>
                                </div>
                                <button onClick={checkoutHandler} disabled={totalPrice === 0 ? true : false}>PROCEED TO CHECKOUT</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <img src={emtycart} alt="" />
                            <h2>Hey, it feels so light!</h2>
                            <p>There is nothing in your bag. Let's add some items.</p>
                            <Link style={{textDecoration: 'none'}} to="/"><button>Go Back</button></Link>
                        </>
                    )
                }
            </div>
            <img src={bg} height={400} width={200} className='bgimg' alt=""/>
            </div>
        </>
    )
}

export default Cart
