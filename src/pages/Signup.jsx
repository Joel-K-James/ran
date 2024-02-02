import React, { useState } from "react";
import visual from "./public/visualblend.png"
import polygon from "./public/polygon-1.svg"
import { Button, Input } from "@chakra-ui/react";
import { Link ,useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/Authcontext";
import { Alert } from "@chakra-ui/react";


export const Signup = () => {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("")
    const [error,setError] = useState("")
    const {signup} = useUserAuth()
    const navigate = useNavigate()
    const handlesignup = async() => {
        setError("")
        try{
          await signup(email,pass)
          alert("User Created Successfully")
          navigate("/login")
        }catch(err){
          setError(err.message)
        } 
      }

  return (
    <div class="loginpage">
    {
        error && <Alert variant={"subtle"} status='error'>{error}</Alert>
    }


    <img class="icon" alt="" src={visual} />

    <b class="visual-blend">
      <span class="visual-blend-txt-container">
        <p class="visual">Visual</p>
        <p class="visual">Blend</p>
      </span>
    </b>
    <img class="loginpage-item" alt="" src={polygon} />

    <div class="welcome">
      <span class="visual-blend-txt-container">
        <p class="visual">Welcome</p>
      </span>
    </div>
    <div class="generate-explore-container">
      <span class="visual-blend-txt-container">
        <p class="generate">
          <span class="generate1">Generate </span>
          <span class="span">&</span>
          <b class="span"> </b>
        </p>
        <p class="explore">Explore</p>
      </span>
    </div>
    <div id="loginContainer">
      <div id="loginBg">

      </div>
      <div id="loginform">
        <h1 id="headingLogin">SIGNUP</h1>
        {
            error && <Alert variant={"subtle"} status='error'>{error}</Alert>
        }
        <div>
          <p id="username">EMAIL</p>
          <Input
            type="text"
            placeholder="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
            border="2px solid black"
          />
        </div>
        <div>
          <p id="password">PASSWORD</p>
          <Input
            type="password"
            placeholder="PASSWORD"
            onChange={(e) => setPass(e.target.value)}
            border="2px solid black"
          />
        </div>
        <Button id="loginFormBtn" onClick={handlesignup}>
          SIGN UP
        </Button>
        <p>Already have an account? <Link to={"/"}>Log In</Link></p>
      </div>
    </div>
    </div>
  );
};
