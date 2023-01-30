import React, { useState } from 'react'
import { firestore } from '../config/firebase';
// import { Link } from 'react-router-dom';
const Register = () => {
    const [first_name, setName] = useState('');
    const [last_name, setLastname] = useState('')
    const [service_name, setServiceName] = useState('')
    const [location, setLocation] = useState('')
    const [pincode, setPinCode] = useState('')
    const [rate, setRate] = useState('')
    const [contact_no, setContact] = useState('')
    const [food_type, setFoodType] = useState('')
    const [time, setTime] = useState('')
    const [holidays, setHolidays] = useState('')


    // const []

    function submitData(e){
        e.preventDefault();

        firestore.collection('user_data')
        .add({
            first_name, last_name, service_name, location, pincode, rate, contact_no, food_type, time, holidays
        })
    }

    return (

        <div className="container">

            <form className="well form-horizontal"method="post" id="contact_form" onSubmit={submitData}>
                <fieldset>

                    <legend>
                        <center>
                            <h2><b>Registration Form</b></h2>
                        </center>
                    </legend><br />


                    <div className="form-group">
                        <label className="col-md-4 control-label">First Name</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="first_name" placeholder="e.g Ram" className="form-control" type="text" value={first_name} onChange={(e)=> setName(e.target.value)} required />
                            </div>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-md-4 control-label">Last Name</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="last_name" placeholder="e.g Shinde" className="form-control" type="text" value={last_name} onChange={(e)=> setLastname(e.target.value)} required   />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label">Mess Service Name</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="service_name" placeholder="e.g Shree Tiffin Services" className="form-control" type="text" value={service_name} onChange={(e)=> setServiceName(e.target.value)} required  />
                            </div>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-md-4 control-label">Location</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="location" placeholder="e.g Lane-3, Shaniver Wada, Pune" className="form-control" type="text" value={location} onChange={(e)=> setLocation(e.target.value)} required  />
                            </div>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-md-4 control-label">Pin Code</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="pincode" placeholder="e.g 422209" className="form-control" type="passw requiredord" value={pincode} onChange={(e)=> setPinCode(e.target.value)} required  />
                            </div>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-md-4 control-label">Tiffin Rate/ Monthly</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="rate" placeholder="e.g 2500" className="form-control" type="passw requiredord" value={rate} onChange={(e)=> setRate(e.target.value)} required  />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label">Contact No.</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                <input name="contact_no" placeholder="+91 98608574587" className="form-control" type="text" value={contact_no} onChange={(e)=> setContact(e.target.value)} required  />
                            </div>
                        </div>
                    </div>



                    <div className="form-group">
                        <label className="col-md-4 control-label">Food Type</label>
                        <div className="col-md-4 selectContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                <select name="food_type" className="form-control selectpicker" value={food_type} onChange={(e)=> setFoodType(e.target.value)} required >
                                    <option value="">Select your Food Services</option>
                                    <option>Vegeterian</option>
                                    <option>Non-Vegeterian</option>
                                    <option>Both/Occasional</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label">Mess Service Time</label>
                        <div className="col-md-4 selectContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                <select name="time" className="form-control selectpicker" value={time} onChange={(e)=> setTime(e.target.value)} required >
                                    <option value="">Select your Mess Timings</option>
                                    <option>8:00 AM to 01:00 PM</option>
                                    <option>01:00 PM to 04:00 PM</option>
                                    <option>04:00 PM to 09:00 PM</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label">Holidays</label>
                        <div className="col-md-4 selectContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                <select name="holidays" className="form-control selectpicker" value={holidays} onChange={(e)=> setHolidays(e.target.value)} required  >
                                    <option value="">Holidays</option>
                                    <option>Saturday</option>
                                    <option>Sunday</option>
                                    <option>Monday</option>
                                    <option>Tuesday</option>
                                    <option>Wednesday</option>
                                    <option>Thursday</option>
                                    <option>Friday</option>

                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label"></label>
                        <div className="col-md-4"><br />
                            <button type="submi requiredt"
                                className="btn btn-warning"  >SUBMIT <span className="glyphicon glyphicon-send"></span></button>
                        </div>
                    </div>

                </fieldset>
            </form>
        </div>

    )
}

export default Register
