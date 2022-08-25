import React, { useContext, useState } from 'react'

// css
import './registerlogin.css'

// import Context

// icon
import { FaUserAlt } from 'react-icons/fa'
import { MdLock } from 'react-icons/md'

// img
import img from '../../assets/images/register-login/img.png'
import avatar from '../../assets/images/register-login/img1.png'
import Context from '../../context/Context'
const RegisterLogin = () => {
    
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const loginSubnit = e => {
        e.preventDefault()
        login === currentLogin && password === currentPassword && setAuth(true)
    }

    const {auth, setAuth, currentLogin, currentPassword} = useContext(Context)

    return (
    <div className='registerlogin'>
        <div className="container">
            <div className="registerlogin_main">
                <div className="registerlogin_main_img">
                    <img src={img} alt="" />
                </div>
                <div className="registerlogin_main_form">
                    <form onSubmit={e => loginSubnit(e)} className='registerlogin_main_form_img'>
                        <img src={avatar} alt="" />
                        <p className='registerlogin_main_form_img_p'>Login: Intellect</p>
                        <p className='registerlogin_main_form_img_p'>password: 13113133</p>
                        <h2 className='registerlogin_main_form_img_h2'>Welcome to Aibolit</h2>
                        <div className="registerlogin_main_form_input one">
                            <div className="registerlogin_main_form_input_icon">
                                <FaUserAlt className='registerlogin_main_form_input_icon_user' />
                            </div>
                            <div className='registerlogin_main_form_input_div'>
                                <input type="text" placeholder='User name' onChange={e => setLogin(e.target.value)}/>
                            </div>
                        </div>
                        <div className="registerlogin_main_form_input two">
                            <div className="registerlogin_main_form_input_icon">
                                <MdLock className='registerlogin_main_form_input_icon_user' />
                            </div>
                            <div className='registerlogin_main_form_input_div'>
                                <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <button type='submit' className='btn' >Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterLogin