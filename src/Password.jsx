import './Pass.css'

function Pass()
{

    function Strength(password) {
        let i = 0;
        if (password.length > 6) {
          i++;
        }
        if (password.length >= 10) {
          i++;
        }
      
        if (/[A-Z]/.test(password)) {
          i++;
        }
      
        if (/[0-9]/.test(password)) {
          i++;
        }
      
        if (/[A-Za-z0-8]/.test(password)) {
          i++;
        }
        if(/[~ _ - @ # $ & ]/.test(password))
        {
          i++;
        }
      
        return i;
      }
      
      let container = document.querySelector(".container");
      document.addEventListener("keyup", function (e) {
        let password = document.querySelector("#YourPassword").value;
      
        let strength = Strength(password);
        if(strength===0)
        {
          container.classList.remove("weak");
          container.classList.remove("moderate");
          container.classList.remove("strong");
        }
        else if (strength <= 2 && strength>0) {
          container.classList.add("weak");
          container.classList.remove("moderate");
          container.classList.remove("strong");
        } else if (strength >=2 && strength <= 4) {
          container.classList.remove("weak");
          container.classList.add("moderate");
          container.classList.remove("strong");
        } else {
          container.classList.remove("weak");
       container.classList.remove("moderate");
          container.classList.add("strong");
        }
      });
      
      let password = document.querySelector("#YourPassword");
      let show = document.querySelector(".show");
      const showPass =() =>{
        if (password.type === "password") {
          password.setAttribute("type", "text");
          show.classList.add("hide");
        } else {
          password.setAttribute("type", "password");
          show.classList.remove("hide");
        }
      };
    return(
        <div class="container">
  <h2>Password Strength Checker</h2>
  <div class="inputArea">
    <input type="password" placeholder=" Password" id="YourPassword"/>
    <div onClick={showPass}class="show"></div>
  </div>
  <div class="strengthMeter"></div>
</div>
    )
}
export default Pass;