import React from 'react';
import { RxCross2 } from "react-icons/rx";
import './signupForm.css';

const signupForm = ({onClose, onLogin}) => {

    return (
        <div className='main_signup_form'>
            <div className='signup_form'>
                <div id="cancel2_icon"><RxCross2 onClick={onClose} size={25} /></div>
                <div className="signup_heading">
                    <h1>Let’s get started</h1>
                </div>
                <div className='main_signup_div'>
                    <div className='first_name'>
                        <label>First name</label><br />
                        <input type='text' placeholder='First name' />
                    </div>
                    <div className='last_name'>
                        <label>Last name</label><br />
                        <input type='text' placeholder='Last name' />
                    </div>
                </div>
                <div className="main_signup_section">
                    <label>Email</label>
                    <input type='email' placeholder="Email" />
                    <label>Password</label>
                    <input type='password' placeholder="Password " />
                    <div id='checkbox'>
                        <div className='label'><input required type='checkbox' />I agree to the terms of service and privacy policy.</div>
                        <div className='label'><input required type='checkbox' />Yes, send me deals, discounts, and updates!</div>
                    </div>
                    <button id="main_signup_btn">Sign up</button>
                </div>
                <div className="signup_btn">
                    <p>Already have an account?</p><button onClick={onLogin}>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default signupForm
