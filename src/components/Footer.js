import logo from '../images/logo.svg';

export default function Footer(){
    // ******* it is used for style inline css ********

    // let footerStyle={
    //     width:"100vh",
    //     backgroundColor:"red",
    //     textalign:"center"

    // }
    return(
        <footer className="main-footer">
            <div className="flex-container">
                <div className="App-footer">
                    <div className='left-side'>
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>Footer Description</p>
                    </div>
                    
                    <div className="footer-tabs">
                        <h4>Info Links</h4>
                        <a href="home.com">* Home</a>
                        <a href="home.com">* Services</a>
                        <a href="home.com">* Contact Us</a>
                        <a href="home.com">* About Us</a>
                    </div>
                    <div className="footer-tabs">
                        <h4>Info Links</h4>
                        <a href="home.com">* Home</a>
                        <a href="home.com">* Services</a>
                        <a href="home.com">* Contact Us</a>
                        <a href="home.com">* About Us</a>
                    </div>
                    <div className="footer-tabs">
                        <h4>Info Links</h4>
                        <a href="home.com">* Home</a>
                        <a href="home.com">* Services</a>
                        <a href="home.com">* Contact Us</a>
                        <a href="home.com">* About Us</a>
                    </div>
                </div>
            </div>            
        </footer>
    );
}