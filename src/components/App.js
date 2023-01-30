import React, { Component } from 'react';
import {Routes, Route } from 'react-router-dom';
import Register from './Register'

import Header from './Header';
import Home from './Home'
import PostDetail from './PostDetail'
import About from './About';
import Terms from './Terms';
import Contact from './Contact'; 
import UserData from './UserData';
import Footer from './Footer';


export default class App extends Component {
  render() {
    return (

      <div className='App'>
      <Header/>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/post/:postId" element={<PostDetail/>} />
        <Route exact path="/about" element={<About/>} />
\       <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/terms" element={<Terms/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/user_data" element={<UserData/>} />
      </Routes>

      <Footer/>
      </div>
    )
  }
}  
