import { useState } from "react";
import "./earlyAccess.css";
import Button from "../Button/Button";

export default function EarlyAccess() {
  const [error, setError] = useState("");
  const [mail, setMail] = useState("");

  const handleOnChange = (e) => {
    setMail(e.target.value);
  };

  const handleOnSumbit = (e) => {
    e.preventDefault();
    if (validarMail(mail) == true) {
      setError("");
    } else {
      setError("Please enter a valid email address");
    }
  };

  const validarMail = (mail) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  };

  return (
    <div className="earlyAccess">
      <div className="earlyAccess__tarjeta">
        <div className="earlyAccess__texto">
          <h1 className="earlyAccess__titulo">Get early access today</h1>
          <p className="earlyAccess__parrafo">
            It only takes a minute to sign up and our free starter tier
            isextremely generous. If you have any <br />
            questions, our support team would be happy to help you.
          </p>
        </div>

        <form action="" className="earlyAccess__form" onChange={handleOnSumbit}>
          <div className="formError">
            <input
              type="text"
              className="form__input"
              placeholder="email@example.com"
              onChange={handleOnChange}
            />
            <span className="formError__error">{error}</span>
          </div>
          <div className="form__button">
            <Button contenido="Get Started For Free" />
          </div>
        </form>
      </div>
    </div>
  );
}
