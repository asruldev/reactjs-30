import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../actions/user.action'

const Login = (props) => {
    const dispatch = useDispatch()
    const [user, updateUser] = useState({})

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(loginUser(user))
    }

    return (
        <div className="page">
            <h1 className="page-title">Login 30 Hari Js</h1>

            <form className="login" onSubmit={(e) => submitForm(e)}>

                <label>Email</label>
                <input type="email"  autoComplete={'false'} placeholder="email" onChange={(e) => {
                    updateUser({...user, email: e.target.value})
                }} />

                <label>Password</label>
                <input type="password"  autoComplete={'false'} placeholder="rahasia" onChange={(e) => {
                    updateUser({...user, password: e.target.value})
                }}/>

                <button type="submit" onClick={(e) => submitForm(e)}>Login</button>
            </form>
        </div>
    )
}

export default Login