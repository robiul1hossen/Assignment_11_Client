import React, { useContext } from "react";
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaLock, FaRegEnvelope, FaUser } from "react-icons/fa";
import NavigationBar from "../home/NavigationBar/NavigationBar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(email, name, password, photo);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <div className="screen2">
            <div className="screen__content">
              <form onSubmit={handleRegister} className="login">
                <div className="login__field">
                  <i className="login__icon">
                    <FaUser></FaUser>
                  </i>
                  <input type="text" required name="name" className="login__input" placeholder=" Name" />
                </div>
                <div className="login__field">
                  <i className="login__icon">
                    <FaRegEnvelope></FaRegEnvelope>
                  </i>
                  <input type="text" required name="email" className="login__input" placeholder=" Email" />
                </div>
                <div className="login__field">
                  <i className="login__icon">
                    <FaLock></FaLock>
                  </i>
                  <input
                    type="password"
                    required
                    name="password"
                    className="login__input"
                    placeholder="Password"
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon">
                    <FaUser></FaUser>
                  </i>
                  <input type="text" required name="photo" className="login__input" placeholder="Photo URL" />
                </div>
                <button className="button login__submit">
                  <input className="button__text" type="submit" value="SIGN UP NOW" />

                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </form>
              <div className="m-space">
                <h3>log in via</h3>
                <div className="social-icons">
                  <a href="#" className="social-login__icon">
                    <FaGoogle></FaGoogle>
                  </a>
                  <a href="#" className="social-login__icon">
                    <FaFacebook></FaFacebook>
                  </a>
                  <a href="#" className="social-login__icon">
                    <FaGithub></FaGithub>
                  </a>
                </div>
                <p>
                  Already have an Account?{" "}
                  <Link to="/login">
                    <span className="font-bold text-white">Log In</span>
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

export default Signup;
