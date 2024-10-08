import React, { useState } from 'react';
import SideBar from '../../components/SideBar';
import '../../styles/profile.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../components/HeaderLogo';

const Profile = () => {
  const user = useSelector(state => state.user?.user)
  const [name, setName] = useState(user?.name ? user?.name : '')
  const [mobNo, setMobNo] = useState(user?.mobNo ? user?.mobNo : '')
  const [showBtn, setShowBtn] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowBtn(false)
  }

  const handleInputChange = (value, text) => {
    setShowBtn(true)
    if (text === 'name') {
      setName(value)
    }
    if (text === 'mob') {
      setMobNo(value)
    }
  }

  return (
    <>
      <SideBar />
      <HeaderLogo title="Profile" />
      <div className="profile-section">
        {
          user ? (
            <>
              <div className="profile-photo">
                <h1>{user?.name?.charAt(0)}</h1>
              </div>
              <div className="profile-detail">
                <form onSubmit={handleSubmit}>
                  <div className="profile-input">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id='name' onChange={(e) => handleInputChange(e.target.value, 'name')} value={name} />
                  </div>
                  <div className="profile-input">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' value={user?.eamil} />
                  </div>
                  <div className="profile-input">
                    <label htmlFor="mob">Mobile No.</label>
                    <input type="text" id='mob' onChange={(e) => handleInputChange(e.target.value, 'mob')} value={mobNo} />
                  </div>
                  {showBtn && <button type='submit'>UPDATE</button>}
                </form>
              </div>
            </>
          ) : (
            <div>
              <h1>You are not Logged In! Please Login</h1>
              <Link style={{textDecoration: 'none'}} to="/signin"><button>Login</button></Link>
            </div>
          )
        }

      </div>
    </>
  );
};

export default Profile;
