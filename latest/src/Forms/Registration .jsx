import React, { useState } from 'react'
import './Registration.css'


const Registration  = () => {
const [firstName, setFirstName]=useState("");
const [lastName, setlastName]=useState("");
const [email,setEmail]=useState("");
const[Password,setPassword]=useState("");
const[phoneNumber,setPhonenumber]=useState("");
const  handleinputchange=(e)=>{

const{name,value}=e.target;

    switch(name){
case "firstname":
setFirstName(value)
break
case "lastname":
setlastName(value)
 break
 case "email":
 setEmail(value)
 break
case "Password":
setPassword(value)
break
 case "phonenumber":
setPhonenumber(value)
break
    }
}
  return (
    <>
      <form>
<div className='container'>
<h1>sign up</h1>
<p> fill this form to create an account</p>
<b>First Name</b>
<input type="text"  name='firstname' placeholder='Enter First Name'
required
value={firstName}
onChange={handleinputchange}
/>
<b>Last Name</b>
<input type="text" name='lastname' placeholder='Enter last Name'
required
value={lastName}
onChange={handleinputchange}
/>
<b>Email</b>
<input type="text" name='email' placeholder='Enter Email'
required
value={email}
onChange={handleinputchange}
/>
<b>Password</b>
<input type="text" name='Password' placeholder='enter your password'
required
value={Password}
onChange={handleinputchange}
/>
<b>Phone Number</b>
<input type="text" name='phonenumber'  placeholder='03218841436'
required
value={phoneNumber}
onChange={handleinputchange}
/>
<p>By creating an account you agree to ourterms and privacy
    <a href="#" style={{color:"dodgerblue"}}>
    </a>
</p>
<button>Login</button>
</div>

      </form>
    </>
  )
}

export default Registration 
