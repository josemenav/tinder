'use client'

import { useEffect, useState } from 'react';
import './home.styles.css'

const SignButton = () => {
    const [authToken, setAuthToken] = useState(false); 

    const handleClick = () => {
        console.log('Clicked'); 
    }

    return(
        <button className='primary-button' onClick={handleClick}>
            {authToken ? 'Sign out' : 'Create account'}
        </button>
    )
}

export default SignButton; 