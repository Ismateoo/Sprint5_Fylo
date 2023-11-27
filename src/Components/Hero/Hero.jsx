import "./hero.css"
import Button from "../Button/Button"

export default function Hero(){
    return(
        <section className="hero">
            <div className="hero__contenedor">
            <img src="./images/illustration-intro.png" alt="Imagen_files" className="hero__imagen"/>
            <h1 className="hero__titulo">All your files one secure location, <br /> accesible anywhere.</h1>
            <p className="hero__parrafo">Fylo stores all your most important files in one secure location.
                <br /> Access them wherever you need, share and collaborate with
                <br /> friends family, and co-workers.
            </p>
            <Button contenido="Get Started"/>
            <div className="hero__imagenFondo">
                
            </div>
            </div>
            
        </section>
    )
}