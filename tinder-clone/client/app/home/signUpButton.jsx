'use client'
import { useSelector } from 'react-redux'
import { useState } from 'react';
import './home.styles.css'

const SignUpButton = ({setShowModal, setIsSignUp}) => {
    const user = useSelector((state) => state.user)

    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(true)

    }

    return(
        <div>
            <button className='primary-button' onClick={handleClick}>
                {user.username ? 'Sign out' : 'Create account'}
            </button>
        </div>
    )
}

export default SignUpButton; 