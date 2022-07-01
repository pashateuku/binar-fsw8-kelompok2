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
                <table>
                    <tr>
                        <td>
                            <label for="username">Username
                                
                            </label>
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                        <input type="text" id="username" name="username"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="password">
                                Password
                            </label>
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                        <input type="password" id="password" name="password" />
                        </td>
                    </tr>
                    <tr>
                        <td><button type="submit" > Kirim </button></td>
                        <td></td>
                        <td></td>
                    </tr>                    
                    
                </table>  
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