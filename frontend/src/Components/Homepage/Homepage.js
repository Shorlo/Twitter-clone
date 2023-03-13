import React from "react";  //6.9k (gzipped: 2.7k)
import "./Homepage.css";
import Logo from "../../assets/svg/twitter.svg";
import HomeImage from "../../assets/images/twitter_home.png";

const Homepage = () =>
{
    return(
        <div className="home">
            <div className="home_left--img">
                <img className="home_left" src={HomeImage} alt="twitter_home" />
            </div>
            <div className="home_right">
                <img className="logo" src={Logo} alt="logo"/>
                <h1 className="home_right--title" >Happening now</h1>
                <h2 className="home_right--subtitle">Join Twitter today.</h2>
                <div className="home_right--auth__buttons">
                    <button>Sign up with Google</button>
                    <button>Sign up with Apple</button>
                    <button>Sign up with phone or email</button>
                    <p className="policies">
                        By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including <a href="#">Cookies</a> Use.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
//17:39
