import React from 'react'
import { Link } from 'react-router-dom'
// import User_Data from './UserData'
// import { Register } from './'
const Home = () => {
  return (

    
    <div>

      <section id="hero">
        <h4>Eat Unlimited</h4>
        <h2>Trustable Service</h2>
        <h1>Trust our Services</h1>
        <p>We Deliver at Door-Steps</p>
        <button>Order Now</button>
    </section>

    <section className="Register">
        <h1>Register Your Service</h1>
        <button><Link to={'/register'} >Register</Link> </button>
    </section>

    <section className="search">
        <h1>Search Your Tiffin</h1>
        <input type="text" className="search-bar" placeholder="Search Your nearset Tiffin Services by Location"/>
    </section>  
    
    
    
    </div>

    
  )
}

export default Home
