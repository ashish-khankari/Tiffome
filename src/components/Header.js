import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
  return (

    <section id="header">
    <div className ="logo">
        <Link to={'/'} style={{color: 'red'}} >Tiffome</Link> 
    </div>

    <div>
      <ul id='navbar'>
        <li> <Link to={'/'} >Home</Link> </li>
        {/* <li> <Link to={'/create-post'} >Create Post</Link> </li> */}
        <li> <Link to={'/register'} >Register</Link> </li> 
        {/* <li> <Link to={'/services'} >Services</Link> </li> */}
        <li> <Link to={'/about'} >About</Link> </li>
        <li> <Link to={'/terms'} >Terms</Link> </li>
        <li> <Link to={'/contact'} >Contact</Link> </li>
        <li> <Link to={'/user_data'} >User Data</Link> </li>


        {/* <li> <Link to={'/create-post'} >Create Post</Link> </li>
        <li> <Link to={'/create-post'} >Create Post</Link> </li> */}
      </ul>
    </div>
</section>



  )
}
// const styles ={
//   color: whi
// }
export default Header
