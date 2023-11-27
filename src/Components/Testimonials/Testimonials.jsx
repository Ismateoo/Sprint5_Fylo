import "./testimonials.css";
import testimonials from "../../data/testimonials.json"

export default function Testimonials() {
  return (
    <section className="testimonials">
      <img src="./images/bg-quotes.png" alt="" className="tarjeta__comillas" />
      {testimonials.map((data) => (
        <div className="testimonials__tarjeta">
          <p className="tarjeta__parrafo">{data.quote}</p>

          <div className="tarjeta__persona">
            <img src={data.image} alt={data.name} className="persona__foto" />
            <div className="persona__texto">
              <p className="texto__nombre">{data.name}</p>
              <p className="texto__cargo">{data.title}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
