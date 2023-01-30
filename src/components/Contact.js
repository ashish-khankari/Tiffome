import React from 'react'

const Contact = () => {
  return (
    <div class="container1">
      <form>

        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

          <label for="country">Country</label>
          <input type='text' placeholder='Enter Location' id='country' />


          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

          <input type="submit" value="Submit"/>

          </form>
        </div>

        )
}

        export default Contact
