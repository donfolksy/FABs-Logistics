// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="./sign.css">
//     <title>Sign up</title>
// </head>
// <body>
import { React } from "react";
import { Form } from "react-router-dom";
// import styles from './sign.module.css'; 
// import styles from '../bolu/sign.module.css'
// import tick from "./LOGISTICS-PROJECT-IMAGE/image 1.png";

const Signup = () => {
    return (
        <div>
            <div class="containers">
                <h1>Create your account</h1>
                <div class="fields">
                    <form action="GET">
                        <div class="conts">
                            <div class="ones">
                                <label for="FirstName">First Name</label><br></br>
                                <div class="fill">
                                    <input type="text" id="firstname"  required></input>
                                </div>
                            </div>
                            <div class="twos">
                                <label for="LastName">Last Name</label><br></br>
                                <div class="fill">
                                    <input type="text" id="lastname"  required></input>
                                </div>
                            </div>
                            <div class="ones">
                                <label for="email">Email Address</label><br></br>
                                <div class="fill">
                                    <input type="email" id="email"  required></input>
                                </div>
                            </div>
                            <div class="twos">
                                <label for="Phonenumber">Phone Number</label><br></br>
                                <div class="fill">
                                    <input type="tel" id="phonenumber"  required></input>
                                </div>
                            </div>
                            <div class="ones">
                                <label for="password">Password</label><br></br>
                                <div class="fill">
                                    <input type="password" id="password"  required></input>
                                </div>
                            </div>
                            <div class="twos">
                                <label for="confirmpassword">Confirm Password</label><br></br>
                                <div class="fill">
                                    <input type="password" id="password" required></input>
                                </div>
                            </div>
                        </div>
                    
                        <div class="bt-green">
                            <button type="submit" id="submit">Sign Up</button>
                        </div>
                    </form>
                    <div class="last">
                        <p>Already have an account? <a href="/sign-in">Login</a></p>
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Signup;