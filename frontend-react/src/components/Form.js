import { useState } from "react";

function Form(){
    const [tampil,setTampil] = useState(false);
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('')

    function submit(event){
        event.preventDefault();
        setTampil(true);
        setUsername(document.getElementById('username').value);
        setPassword(document.getElementById('password').value);
    }
    return(
        <>
            <form onSubmit={submit}>
                <label for="username">Username:
                    <input type="text" id="username" name="username"/>
                </label>
                <br />
                <label for="password">Password :
                    <input type="password" id="password" name="password" />
                </label>
                <br/>
               <button type="submit" > Kirim </button>
            </form>
            <p>{tampil && 
                <>
                <span >username</span> : {username}
                <br/>
                <span >password</span> : {password}
                
                </>
            }
            </p>
        </>
    )
}

export default Form;