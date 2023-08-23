import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../Css/Register.css";
const apiURL = process.env.REACT_APP_API_URL;
const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 8000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        `${apiURL}/auth/register`,
        {
          username,
          email,
          password,
        }
      );

      localStorage.setItem("authToken", data.token);

      setTimeout(() => {
        navigate('/');
      }, 1800)

    } catch (error) {

      setError(error.response.data.error);

      setTimeout(() => {
        setError("");
      }, 6000);
    }
  };

  return (

    <div className="Inclusive-register-page">

      <div className="register-big-wrapper">


        <div className="register-banner-section ">

          <img src="Mobile-login-pana.png" alt="banner" width="490px" />
        </div>

        <div className="section-wrapper">

         

          <div className="top-register-explain">
            <h2>Register</h2>

          </div>


          <form onSubmit={registerHandler} >
            {error && <div className="error_message">{error}</div>}


            <div className="form-floating mb-3">
              <input type="name" className="form-control" id="floatingName" placeholder="Enter fullname" value={username}
                onChange={(e) => setUsername(e.target.value)} required/>
              <label for="floatingName">Full Name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingEmail" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)}
                value={email}
                tabIndex={1} required></input>
              <label for="floatingEmail">Email Address</label>
            </div>

            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword1" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}
                value={password}
                tabIndex={2}></input>
              <label for="floatingPassword1">Password</label>
            </div>
            
            <div className="form-floating mb-2">
              <input type="password" className="form-control" id="floatingPassword2" placeholder="Enter confirm password" o value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}></input>
              <label for="floatingPassword2">Confirm Password</label>
            </div>

            <div className="top-suggest_login">
            <span> Have an account? </span>
            <a href="/login">Sign In</a>
          </div>

            <button type="submit" >
              Register
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default RegisterScreen;