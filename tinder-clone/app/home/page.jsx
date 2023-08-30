import SignButton from "./signButton";
import NavBar from "../../components/NavBar/NavBar.component";
import { Fragment } from "react";
import './home.styles.css'

const Home = () => {
  return(
    <div className='overlay'>
    <NavBar minimal={false}/>
    <div className="home">
      <h1 className="primary-title">Swipe Right</h1>
      <SignButton/>
    </div>
    </div>
  ); 
}

export default Home; 