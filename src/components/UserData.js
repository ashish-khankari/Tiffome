import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { firestore } from '../config/firebase'


const User_Data = () => {
  const [user_data, setPosts] = useState([])


  useEffect(() => {
    firestore.collection('user_data')
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })


        setPosts(data)
      })
  }, [])

  return (

    <div className='tiffin-data'>

      <h3>Check the Mess Service</h3>
      {user_data.map((post, index) => (
        <div className='post' key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.service_name}</h3>
          </Link>
          <div className='tiffin-details'>


            <p className='d1'><b>Address: </b>   {post.location}</p>
            <p className='d2'><b>pin-Code:</b>   {post.pincode}</p>
            <p className='d1'><b>Monthly-Rate: </b>{post.rate}</p>
            <p className='d2'><b>Contact-Number:</b> {post.contact_no}</p>
            <p className='d1'><b>Food-Type:</b> {post.food_type}</p>
            <p className='d2'><b>Mess-Time</b>{post.time}</p>
            <p className='d1'><b>Holidays:</b> {post.holidays}</p>

          </div>
        </div>
      ))}
    </div>
  )
}

export default User_Data
