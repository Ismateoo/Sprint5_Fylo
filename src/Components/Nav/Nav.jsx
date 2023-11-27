 import "./nav.css"

 export default function Nav(){
    return(   
            <nav className="navegacion">
            <img src="./icons/logo.svg" alt="Logo" className="navegacion__logo"/>                
            <div className="navegacion__links">
                    <a href="#features" className="links__item">Features</a>
                    <a href="#stayProductive" className="links__item">Team</a>
                    <a href="#earlyAccess" className="links__item">Sign in</a>
                </div>
            </nav>   
    )
 }