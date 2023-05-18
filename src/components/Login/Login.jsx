import React, { useContext } from "react";
import "./Login.css";
import { FaFacebook, FaGithub, FaGoogle, FaLock, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form onSubmit={handleLogin} className="login">
                <div className="login__field">
                  <i className="login__icon">
                    {" "}
                    <FaRegEnvelope></FaRegEnvelope>
                  </i>
                  <input type="text" name="email" className="login__input" placeholder=" Email" />
                </div>
                <div className="login__field">
                  <i className="login__icon">
                    {" "}
                    <FaLock></FaLock>
                  </i>
                  <input type="password" name="password" className="login__input" placeholder="Password" />
                </div>
                <button className="button login__submit">
                  <input className="button__text" type="submit" value="LOG IN NOW" />

                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </form>
              <div className="social-login">
                <h3>log in via</h3>
                <div className="social-icons">
                  <a href="#" className="social-login__icon fab fa-instagram">
                    <FaGoogle></FaGoogle>
                  </a>
                  <a href="#" className="social-login__icon fab fa-facebook">
                    <FaFacebook></FaFacebook>
                  </a>
                  <a href="#" className="social-login__icon fab fa-twitter">
                    <FaGithub></FaGithub>
                  </a>
                </div>
                <p>
                  Do not have an Account?{" "}
                  <Link to="/signup">
                    <span className="font-bold text-white">Sign Up</span>
                  </Link>
                </p>
              </div>
            </div>

            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
