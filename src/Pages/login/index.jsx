import React from 'react'
import './style.css'
import Input from '../../components/input'
import img from '../../assets/vectors.png'
import img2 from '../../assets/Dark-Mode.png'
function Login() {
  return (
    <div className="login">
        <div className="container">
            <div className="content">
                <div className="form">
                    <h1>Sign in</h1>
                    <p className='text'>Sign in and start managing your candidates!</p>
                    <form action="get">
                        <Input type="email"  placeholder='Login'/>
                        <Input type="password"  placeholder='Password' />
                        <div className="passwordOption">
                            <div className="remember">
                                <Input type="checkbox" name={"check"} />
                                <label htmlFor="check">Remember me</label>
                            </div>
                            <p className="forget">Forget password?</p>
                        </div>
                        <Input type="button" value={"login"} />
                    </form>
                </div>
            </div>
        </div>
        <div className="footer-img">

            <img src={img} alt="" srcset="" />
        </div>
        <div className="darkMode">

            <img src={img2} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Login