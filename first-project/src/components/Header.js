import logo from '../assets/logo.svg';

// Added new component of header
export default function Header(){
    return(
      <header>
        <img src={logo} alt="logo"/> 
        <p>Logo Here</p>        
      </header>
    );
  }