import { useState } from "react";

function FormRead(){
    const [tampil,setTampil] = useState(false);
    const [nama,setNama] = useState('');
    const [pekerjaan,setPekerjaan] = useState('');

        function diSubmit(event){
            event.preventDefault();
            setTampil(true);
            setNama(document.getElementById('nama').value);
            setPekerjaan(document.getElementById('pekerjaan').value)
        }
    return(
        <>
        <form onSubmit={diSubmit}> 

            <table>
                <tr>
                    <td>
                        <label for="nama">
                            Nama
                        </label>
                    </td>
                    <td>
                        :
                    </td>
                    <td>
                        <input type="text" name="" id="nama"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="pekerjaan">
                            Pekerjaan    
                        </label> 
                    </td>
                    <td>
                        :
                    </td>
                    <td>
                        <input type="text" name="" id="pekerjaan"/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button type="submit" >Klik</button>

                    </td>
                    <td>
                    </td>
                </tr>
            </table>
            <br/>
            
            <p>
                {tampil && 
                    <>
                      <span>Nama : </span> <span>{nama}</span> <br/>
                      <span>Pekerjaan : </span> <span>{pekerjaan}</span> 

                    </>
                }
            </p>
           

         </form>
        </>
    )
}

export default FormRead;