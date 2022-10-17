import React, { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';

const Login = () => {
    const {user, setUser} = useContext(UserContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() => {
        let credentials = {
            username,
            password
        }

        fetch('https://hockey-chronicles-api.herokuapp.com/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then((response) => {
            return response.json();
        }).then(data => {
            if(data.success){
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.user.username)
                setUser(data.user.username);
                // console.log(data.user)
            } else {
                setUser(null);
            }
        });
    }

    return (
        <>
            <div className='mt-2'>
                <form>
                    <div className='px-2'>
                        <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='username'
                        >
                            Username:
                        </label>
                        <input
                            className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='username'
                            type='text'
                            placeholder='Enter your username...'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='px-2'>
                        <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='password'
                        >
                            Password:
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='password'
                            type='password'
                            placeholder='Enter your password...'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </form>
                <div className='w-full flex mt-2'>
                    <button
                        className='border border-black p-1 w-20 rounded m-auto'
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>

            </div>
        </>
    )
}

export default Login