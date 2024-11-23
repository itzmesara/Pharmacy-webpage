import React, { useState } from 'react';
import './Sample.css'

function Sample()
{
    //   const [password, setPassword] = useState('');
    //   const [showPassword, setShowPassword] = useState(false);
    
    //   const checkStrength = (password) => {
    //       let strength = 0;
    
    //     if (password.length() > 6) {
    //       strength++;
    //     }
    //     if (password.length() >= 10) {
    //       strength++;
    //     }
    
    //     if (/[A-Z]/.test(password)) {
    //       strength++;
    //     }
    
    //     if (/[0-9]/.test(password)) {
    //       strength++;
    //     }
    
    //     if (/[A-Za-z0-9]/.test(password)) {
    //       strength++;
    //     }
    //     if (/[~ _ - @ # $ & ]/.test(password)) {
    //       strength++;
    //     }
    
    //     return strength;
    // };
    
    //   const toggleShowPassword = () => {
    //     setShowPassword(!showPassword);
    //   };
    
    //   return (
    //     <div className="container">
    //       <h2>Password Strength Checker</h2>
    //       <div className="inputArea">
    //         <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <div className="show" onClick={toggleShowPassword}>
    //           {showPassword ? 'Hide' : 'Show'}
    //         </div>
    //       </div>
    //       <div className={`strengthMeter ${checkStrength() === 0 ? 'Weak' : checkStrength() <= 2 ? 'weak' : checkStrength() <= 4 ? 'moderate' : 'strong'}`}></div>
    //     </div>
    //   );
    return(
      <div className='load-body'>
        <div className='loading'>
          
        </div>
      </div>
    )
    
}

export default Sample;