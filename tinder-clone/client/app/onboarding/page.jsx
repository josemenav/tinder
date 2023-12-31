'use client'
import { Fragment } from "react";
import NavBar from "../../components/NavBar/NavBar.component";
import './onboarding.styles.css'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import axios from 'axios';

const OnBoarding = () => {
  let router =  useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [formData, setFormData] = useState({
    user_id: cookies.UserId,
    first_name: "", 
    dob_day: "", 
    dob_month: "", 
    dob_year: "", 
    show_gender: false, 
    gender_identity: '', 
    gender_interest: '', 
    url: '', 
    about: '', 
    matches: []
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/user`,{formData})
      const success = response.status == 200
      if (success){
        router.push('dashboard')
      }
    } catch (error) {
      console.log(error)
    }
    console.log("Submitted")
  }


  const handleChange = (event) => {
    console.log("value changed", event)
    const name = event.target.name; 
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value; 
    console.log(`Name: ${name} and value: ${value}`)

    setFormData((prevState) => ({
      ...prevState, 
      [name]: value
    }))
  }


    return(
      <Fragment>
        <NavBar minimal={true} 
          showModal={() => {}} 
          setShowModal={false}/>

        <div className="onboarding">
          <h2>Create account</h2>
          <form onSubmit={handleSubmit}>
            <section>
              <label htmlFor="first_name">First Name</label>
              <input 
                type="text" 
                id="first_name" 
                name="first_name" 
                placeholder="First Name" 
                required={true} 
                value={FormData.first_name} 
                onChange={handleChange} />

              <label>Birthday</label>
              <div className="multiple-input-container">
              <input 
                type="number" 
                id="dob_day" 
                name="dob_day" 
                placeholder="DD" 
                required={true} 
                value={formData.dob_day} 
                onChange={handleChange} />

              <input 
                type="number" 
                id="dob_month" 
                name="dob_month" 
                placeholder="MM" 
                required={true} 
                value={formData.dob_month} 
                onChange={handleChange} />    

              <input 
                type="number" 
                id="dob_year" 
                name="dob_year" 
                placeholder="YY" 
                required={true} 
                value={formData.dob_year} 
                onChange={handleChange} />  
              </div>

            
              <label>Gender</label>
              <div className="multiple-input-container">
              <input 
                type="radio" 
                id="man-gender-identity" 
                name="gender_identity" 
                value="man" 
                onChange={handleChange} 
                checked={formData.gender_identity === 'man'} /> 
              <label htmlFor="man-gender-identity">Man</label>

              <input 
                type="radio" 
                id="woman-gender-identity" 
                name="gender_identity" 
                value="woman" 
                onChange={handleChange} 
                checked={formData.gender_identity === 'woman'} /> 
              <label htmlFor="woman-gender-identity">Woman</label> 

              <input 
                type="radio" 
                id="more-gender-identity" 
                name="gender_identity" 
                value="more" 
                onChange={handleChange} 
                checked={formData.gender_identity === 'more'} />  
              <label htmlFor="more-gender-identity">More</label>
              </div>
              <label htmlFor="show-gender">Show Gender on my Profile</label>

              <input
                  id="show-gender"
                  type="checkbox"
                  name="show_gender"
                  onChange={handleChange}
                  checked={formData.show_gender}
              />
            
            <label>Show Me</label>
            <div className="multiple-input-container">
              <input
                  id="man-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="man"
                  onChange={handleChange}
                  checked={formData.gender_interest === 'man'}
              />
              <label htmlFor="man-gender-interest">Man</label>
              <input
                  id="woman-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="woman"
                  onChange={handleChange}
                  checked={formData.gender_interest === 'woman'}
              />
              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                  id="everyone-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="everyone"
                  onChange={handleChange}
                  checked={formData.gender_interest === 'everyone'}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>

            </div>

            <label htmlFor="about">About me</label>
            <input
                id="about"
                type="text"
                name="about"
                required={true}
                placeholder="I like long walks..."
                value={formData.about}
                onChange={handleChange}
            />

            <input type="submit" value="submit"/>
            </section>

            <section>

              <label htmlFor="url">Profile Photo</label>
              <input
                  type="url"
                  name="url"
                  id="url"
                  onChange={handleChange}
                  required={true}
              />
              <div className="photo-container">
                {formData.url && <img src={formData.url} alt="Profile pic preview" />}
              </div>


            </section>

          </form>
        </div>
      </Fragment>
    ); 
  }
  
  export default OnBoarding; 