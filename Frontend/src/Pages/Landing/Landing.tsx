import './Landing.css';

import imagen from '../../assets/Presentation/unimetaVector.png';
import logo from '../../assets/Presentation/Logo CBTic 1.svg';

function Landing() {
  return (
    <section className='containerLanding'>
      <div className='presentation'>
        <img src={logo} alt={logo} />
        <img src={imagen} alt={imagen} />
      </div>
      <div className='info'>
        <div>
          <h1>Mision</h1>
          <p>
            Nuestra misión es mejorar la calidad de la educación en el departamento de ciencias básicas mediante la creación y la implementación de una guía de estudios actualizada y bien estructurada, 
            que permita a los estudiantes comprender y aplicar los conceptos de manera efectiva. 
          </p>
        </div>
        <div>
          <h1>Vision</h1>
          <p>
            Aspiramos a colaborar con otros departamentos y organizaciones educativas para difundir nuestras mejores prácticas y mejorar la calidad de la educación en toda la institución.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landing;
