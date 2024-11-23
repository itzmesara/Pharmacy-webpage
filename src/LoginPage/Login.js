import axios from 'axios';
import './Login.css'

function Login()
{
    const Check=()=>{
        const user=document.getElementById('user').value;
        const pass=document.getElementById('pass').value;
        axios.get('http://localhost:8080/login')
        .then((res)=>{
            if(res.data.exists({user,pass}))
            {

                window.location.href="/home"
            }
        })
        .catch((error)=>{
            alert("Invalid");
        });
            
        
    }
    return(
    <div className='login-container'>
    <div class="square">
    <i style={{color:"#00ff0a;"}}></i>
    <i style={{color:"#ff0057;"}}></i>
    <i style={{color:"#fffd44;"}}></i>
    <div class="login">
        <h2>Login</h2>
        <div class="inputBx">
            <input type="text" id="user" placeholder="Username"/>
        </div>
        <div class="inputBx">
            <input type="password" id="pass" placeholder="Password"/>
        </div>
        <div class="inputBx">
            <input type="submit" onClick={Check} value="Sign in"/>
        </div>
        <div class="links">
            <a href="#">Forget Password</a>
            <a href="/register">Signup</a>
        </div>
    </div>
</div>
</div>
    )
}

export default Login;