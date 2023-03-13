import React from "react";  //6.9k (gzipped: 2.7k)
import "./Homepage.css";
import Logo from "../../assets/svg/twitter.svg";
import HomeImage from "../../assets/images/twitter_home.png";

const Homepage = () =>
{
    return(
        <div className="homepage">
            <div className="homepage__top">
                <div className="homepage__topleft">
                    <img src={HomeImage} alt="twitter_home" />
                </div>

                <div className="homepage__top-right">
                    <img className="logo" src={Logo} alt="logo"/>
                    <h1 className="homepage__top-right--title" >Happening now</h1>
                    <h2 className="homepage__top-right--subtitle">Join Twitter today.</h2>

                    <div className="homepage_top-right--btns">
                        <button className="btn_primary">Sign up with Google</button>
                        <button className="btn_primary">Sign up with Apple</button>
                        <button className="btn_secondary">Sign up with phone or email</button>

                        <p className="homepage__right--policies">
                            By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including{" "} <a href="#">Cookies</a> Use.
                        </p>
                    </div>

                    <div className="homepage_top-right--btns">
                        <h3>Already have an account?</h3>
                        <button className="btn_primary">Sign in</button>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a><a href="#">Terms of Service</a>
            </footer>
        </div>
    );
};

export default Homepage;
