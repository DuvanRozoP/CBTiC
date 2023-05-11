import { useState } from 'react';
import './DetailSubjets.css';
import { useParams } from 'react-router-dom';

import authorPredeterminate from '../../assets/icons/authorPredeterminate.png';
import Faraday from '../../assets/Presentation/WhatsApp Image 2023-05-10 at 4.20.10 PM.jpeg'
const Descripcion = [
  {
    Info: 'Este curso cuenta con cinco capítulos: Electrostática, Corriente eléctrica continua, Campo magnético, Inducción electromagnética y Ecuaciones de Maxwell. En cada uno de estos capítulos aparecen problemas resueltos y al final de cada uno de ellos se ha dispuesto de una colección de problemas propuestos. El texto incluye un producto multimedia',
    Temas: ['Ley de Coulomb','Campo Electrostático','Potencial Electrostático', 'Ley de Gauss', 'Condensadores', 'Experimento de Oersted', 'Fuerza de Lorentz', 'Ley de Ampere', 'Efecto Hall','Ley de Faraday', 'Campo Electromagnetico'],
  },
];

function AboutSubjets() {
  return (
    <section className='descriptionCurso'>
      <h1>Sobre este curso</h1>
      {Descripcion.map((element) => {
        return <p key={element.Info}>{element.Info}</p>;
      })}
      <br />
      <h1>Temas</h1>
      {Descripcion.map((element, index) => {
        return (
          <section key={index} className='TemasCard'>
            {element.Temas.map((tema, indexTema) => {
              return (
                <div key={indexTema} className='TemaCard'>
                  <h3>
                    {indexTema+1} 
                  </h3>
                  <p>{tema}</p>
                </div>
              );
            })}
          </section>
        );
      })}
    </section>
  );
}


// ~ PROFESORES ACARGO DE LA ASIGNATURA

const Profesores = [
  {
    name: 'No hay profesores',
    img: authorPredeterminate,
  },
  {
    name: 'No hay profesores',
    img: authorPredeterminate,
  },
  {
    name: 'No hay profesores',
    img: authorPredeterminate,
  },
  {
    name: 'No hay profesores',
    img: authorPredeterminate,
  },
];

function AuthorTeacher() {
  return (
    <section className='authorTeacher'>
      <h1>Profesores</h1>
      <div className='cardsTeacher'>
        {Profesores.map((element) => {
          return (
            <section key={element.name} className='cardTeacher'>
              <img src={element.img} alt={element.name} />
              <h1>{element.name}</h1>
            </section>
          );
        })}
      </div>
    </section>
  );
}
function AboutInteracciones(){
  return(
    <section className='AboutInteracciones'>
      <h1>Interacciones</h1>
      <div className='CardInteraccion'>
        <img src={Faraday} alt="" />
        <div>
          <h3>Ley de Faraday</h3>
        </div>
      </div>
    </section>
  )
}
// * FATHER
function DetailSubjets() {
  const [menu, setMenu] = useState('interacciones');
  const description  = useParams();
  console.log(description);
  return (
    <section className='DetailSubject'>
      <section className='detailPresentation'>
        <h1>{description.subjectId}</h1>
        <p>Electromagnetismo</p>
      </section>
      <section className='detailDescription'>
        <div className='miniNavbar'>
          <button
            onClick={() => setMenu('descripcion')}
            className={`${menu === 'descripcion' ? 'Active' : 'Disabled'}`}
          >
            Descripcion
          </button>
          <button
            onClick={() => setMenu('profesores')}
            className={`${menu === 'profesores' ? 'Active' : 'Disabled'}`}
          >
            Profesores
          </button>
          <button
            onClick={() => setMenu('interacciones')}
            className={`${menu === 'interacciones' ? 'Active' : 'Disabled'}`}
          >
            Interacciones
          </button>
        </div>
        {menu === 'descripcion' && <AboutSubjets />}
        {menu === 'profesores' && <AuthorTeacher />}
        {menu === 'interacciones' && <AboutInteracciones />}
      </section>
    </section>
  );
}

export default DetailSubjets;
