import{Link} from 'react-router-dom'

function Navbar(){
    return (
        <>
            <nav>
            <h1>LOGO</h1>
                <ul class="list">
                    <li> <Link to="/">HOME</Link> </li>
                    <li>WORK</li>
                    <li>CONTACT</li>
                    <li>ABOUT ME</li>
                </ul>
                <ul class="login">
                    <li> <Link to="/form">Buat Player</Link> </li>
                    <li> <Link to="/formedit">Edit Player</Link> </li>
                    <li> <Link to="/formread">Lihat Player</Link> </li>
                   
                </ul>
            </nav>
        </>
    )
}

export default Navbar

