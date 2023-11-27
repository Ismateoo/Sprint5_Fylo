import "./features.css"
import features from '../../data/features.json';

export default function Caracteristicas() {
  return(

  <div className="features">
      {features.map(data => (
        
          <div className="features__contenedor">
              <img src={data.image} alt={data.title}/>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
          </div>
         
      ))}
 </div>
 );
}