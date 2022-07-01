import { useState } from "react";

function FormEdit(){
    const [tampil,setTampil] = useState(false);
    const [nama, setNama] = useState('');
    const [umur,setUmur] = useState('')

    function submit(event){
        event.preventDefault();
        setTampil(true);
        setNama(document.getElementById('nama').value);
        setUmur(document.getElementById('umur').value);
    }
    return(
        <>
            <form onSubmit={submit}>
                <table>
                    <tr>
                        <td>
                            <label for="nama">Nama
                                
                            </label>
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            <input type="text" id="nama" name="nama"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="umur">
                                Umur
                            </label>
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            <input type="umur" id="umur" name="umur" />
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
                <span >Nama</span> : {nama}
                <br/>
                <span >Umur</span> : {umur}
                
                </>
            }
            </p>
        </>
    )
}

export default FormEdit;