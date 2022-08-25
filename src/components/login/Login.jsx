import React from 'react'
// login css
import './login.css'


// image import
import img1 from '../../assets/images/login-image/img1.png'
import img2 from '../../assets/images/login-image/google.png'
import img3 from '../../assets/images/login-image/img2.png'
import img4 from '../../assets/images/login-image/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <div className="container">
        <div className="login-main">
          <div className="login-main2">
            <div className="cokro">
              <p>скоро</p>
              <div className="udovniye">
                <h1>
                  Удобное приложение <br />
                  для питомцев и <br />
                  их хозяев
                </h1>
              </div>
              {/* login-right img */}
              <div className="login-app-store-and-google-play">
                <img src={img1} alt="" />
                <img src={img2} alt="" className='login-img2' />
              </div>
            </div>
            <div className="login-dog-img">
              <div className="dog-img">
                <img src={img3} alt="" />
              </div>
            </div>
            {/*login box  */}
            <div className="login-boxs">
              <img src={img4} alt="" />

              {/*INPUT  */}
              <div className="input">
                <input type="text" className='login-telefon-number' />
                <input type="password" className='login-telefon-number' />
              </div>
              {/*login input button  */}
              <div className="login-input-button">
                <button>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login