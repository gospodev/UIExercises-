import React, {useState} from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] =   useState('');
    const[error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div>
                <form onSubmit= {handleSubmit}>
                    <input type="email" name="email" placeholder="email..." required onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" name="pwd" placeholder="password..." required onChange={(e) => setPwd(e.target.value)}/>
                    <button type="submit">Log In</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    )
}
export default Login;