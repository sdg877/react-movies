import { useState } from 'react'

export default function LoginPage({ setUser }) {
    const [userText, setUserText] = useState('')

    function handleClick(e){
        e.preventDefault()
        setUser(userText)
    }

    function handleChange(e) {
        setUserText(e.target.value)
    }

    return(
        <div>
            <form onSubmit={handleClick}>
                <input 
                className="input"
                placeholder="email"
                value={userText} 
                onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}