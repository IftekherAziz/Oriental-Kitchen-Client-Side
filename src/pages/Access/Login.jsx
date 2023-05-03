import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const { emailSingIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    emailSingIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div>
      <div className="text-center mx-auto p-5 md:p-10 form-control w-full max-w-sm">
        <form onSubmit={handleLogin} className='mb-3'>
          <h3 className='text-3xl mb-5'>Please, Login!</h3>
          <span className="label-text">What is your Email?</span>
          <input type="email" placeholder="Enter Your E-mail" name='email' className="input input-bordered w-full max-w-xs text-center mb-3" required />
          <span className="label-text">Enter your password?</span>
          <input type="password" placeholder="Enter Your Password" name='password' className="input input-bordered w-full max-w-xs text-center mb-3" required />
          <button className="btn btn-outline text-black-800">Login</button>
        </form>
        <div className='text-center'>
          <p>Or Login with</p>
          <button onClick={handleGoogleSignIn} className='mr-2'><FaGoogle className='text-4xl' /></button>
          <button onClick={handleGitHubSignIn}><FaGithub className='text-4xl' /></button>
        </div>
        <div>
          <p>Do you need an account?
            <br />
            <Link to='/access/register'>
              <span className='underline decoration-1'>Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;