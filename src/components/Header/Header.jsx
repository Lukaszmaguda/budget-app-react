import skarbonka from '../../img/skarbonka.png'
import './Header.css';

function Header(){
    return (
        <header>
            <img src={skarbonka} alt="skarbonka" className='logo react' />
            <h1> APLIKACJA DO ZARZĄDZANIA BUDŻETEM </h1>
        </header>
    )
}

export default Header