import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer__logo">
        <img src="./icons/logo.svg" alt="Logo" />
      </div>

      <div className="footer__texto">
        <div className="footer__ubicacion">
        <img src="./icons/icon-ubication.svg" alt="" className="icon"/>
          <span>
            Lorem ipsum dolor sit amet, consecteur <br />
            adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua
          </span>
        </div>

        <div className="footer__contacto">
          <div className="contacto__contenedor">
          <img src="./icons/icon-phone.svg" alt="" className="icon"/>
            <span>+1-543-123-4567</span>
          </div>
          <div className="contacto__contenedor">
          <img src="./icons/icon-mail.svg" alt="" className="icon"/>
            <span>example@fylo.com</span>
          </div>
        </div>

        <div className="footer__listas">
            <ul className="listas__items">
                <li className="items__item">About us</li>
                <li className="items__item">Jobs</li>
                <li className="items__item">Press</li>
                <li className="items__item">Blog</li>
            </ul>
            
            <ul className="listas__items">
                <li className="items__item">Contact us</li>
                <li className="items__item">Terms</li>
                <li className="items__item">Privacy</li>
            </ul>
        </div>

        <div className="footer__redes">
           <img src="./icons/icon-facebook.svg" alt="" className="icon icono-redes"/>
           <img src="./icons/icon-twitter.svg" alt="" className="icon icono-redes"/>
           <img src="./icons/icon-instagram.svg" alt="" className="icon icono-redes"/>
        </div>
      </div>
    </footer>
  );
}
