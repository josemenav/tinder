import SignUpButton from "./signUpButton";
import NavBar from "../../components/NavBar/NavBar.component";
import { Fragment } from "react";
import './home.styles.css'
import { useState } from "react";
import AuthModal from '../../components/AuthModal/AuthModal.component';

const Home = () => { 
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true)
  return(
    <div className='overlay'>
    <NavBar minimal={false} setShowModal = {setShowModal} showModal={showModal} setIsSignUp={setIsSignUp}/>
    <div className="home">
      <h1 className="primary-title">Swipe Right</h1>
      <SignUpButton setShowModal={setShowModal} setIsSignUp={setIsSignUp}/>
      {showModal &&(<AuthModal setShowModal = {setShowModal} isSignUp={isSignUp}/>)}
    </div>
    </div>
  ); 
}

export default Home; 