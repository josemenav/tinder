'use client'
import Image from 'next/image'
import './NavBar.styles.css'
import whiteLogo from '../../public/tinder_logo_white.png'
import colorLogo from '../../public/color-logo-tinder.png'
import { useSelector } from 'react-redux'

const NavBar = ({minimal, setShowModal, showModal, setIsSignUp}) => {
  const user = useSelector((state) => state.user)

  const handleClick = () => {
      setShowModal(true);  
      setIsSignUp(false)
  }
    return(
      <nav>
        <div className='logo-container'>
          <Image className='logo' src={minimal ? colorLogo : whiteLogo} alt='Logo' />
        </div>
        {!user.username && !minimal &&<button 
        className='nav-button'
        onClick={handleClick}
        disabled = {showModal}
        >Log in</button>}
      </nav>
    ); 
  }
  
export default NavBar; 