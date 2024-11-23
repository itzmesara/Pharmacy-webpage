import '../LoginPage/Login.css'
import { useEffect,useRef } from 'react';
import axios from 'axios'
function Register()
{
    
    const Check=()=>{
        const pass=document.getElementById("pass").value;
        const con=document.getElementById("con").value;
        const user=document.getElementById("user").value;
        axios.post("http://localhost:8080/signup",{
            name:user,
            password:pass
        })
        .then(()=>window.location.href="/")
    }
    return(
        <div className='login-container'>
    <div class="square">
    <i style={{color:"#00ff0a;"}}></i>
    <i style={{color:"#ff0057;"}}></i>
    <i style={{color:"#fffd44;"}}></i>
    <div class="login">
        <h2>Register</h2>
        <div class="inputBx">
            <input type="text" id="user"placeholder="Username"/>
        </div>
        <div class="inputBx">
            <input type="password" id="pass" placeholder="Set Password"/>
        </div>
        <div className='inputBx'>
            <input type='text' id="con" placeholder='Confirm Password'/>
        </div>
        
        <div class="inputBx">
            <input type="submit" onClick={Check} value="Sign in"/>
        </div>
        <div class="links">
            <a href="#">Have an account?</a>
            <a href="#">Login</a>
        </div>
    </div>
</div>
</div>
    )
}

export default Register;