import { React, useState, useRef } from "react";
import './signup.css';
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Signup = ({onClose, showSignupForm}) => {

    let signup = 'Sign up';
    let login = 'Log in';
    let signupText = "Don't have an account?";
    let loginText = 'Already have an account?';
    let signupHeading = 'Welcome to Turo';
    let loginHeading = 'Welcome back';

    const [showSignup, setShowSignup] = useState(true);
    const [signupBtn, setSignupBtn] = useState(true);
    const [heading, setHeading] = useState(true);

    const div = useRef();

    const show = () => {
        if(showSignup){
            div.current.style.marginTop = '0em';
        }
        else{
            div.current.style.marginTop = '8em'
        }

        setShowSignup(!showSignup);
        setSignupBtn(!signupBtn);
        setHeading(!heading);
    }

    return (
        <>
        <div className="main_signup">
        <div className="signup">
            <div id="cancel1_icon"><RxCross2 onClick={onClose} size={25} /></div>
            <div className="signup_heading">
                <h1>{heading ? signupHeading : loginHeading}</h1>
            </div>
            {!showSignup && <div className="login_section">
                <label>Email</label>
                <input type='email' placeholder="Email" />
                <label>Password</label>
                <input type='password' placeholder="Password " />
                <button id="login_btn">Log in</button>
                <p id="or">or</p>
            </div>}
            <div ref={div} className="signup_section">
                <button><i className="icon"><FcGoogle size={25} /></i>Continu with Google</button>
                <button><i className="icon"><BsFacebook style={{ color: 'blue' }} size={25} /></i>Continu with Facebook</button>
                {signupBtn && <button onClick={showSignupForm}><i className="icon"><AiOutlineMail style={{ color: 'black' }} size={25} /></i>Continu with Email</button>}
            </div>
            <div className="signup_btn">
                <p>{showSignup ? loginText : signupText}</p><button onClick={show}>{showSignup ? login : signup}</button>
            </div>
        </div>
    </div>
        </>
    )
}

export default Signup
