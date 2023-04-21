import { useState } from 'react';
import './DetailSubjets.css';

import authorPredeterminate from '../../assets/icons/authorPredeterminate.png';

function AboutSubjets() {
  return (
    <section className='descriptionCurso'>
      <h1>Sobre este curso</h1>
      <p>
        Angular es uno de los frameworks más utilizados en la actualidad para
        hacer aplicaciones web. Nace de Angular.js y su éxito, pero cambia
        totalmente el paradigma de desarrollo. No estamos ante una simple
        versión más, estamos ante una nueva herramienta para realizar nuestros
        proyectos de una forma más rápida y sencilla.
      </p>
      <br /> 
      {/* Temporal */}
      <h1>Temas</h1>
    </section>
  );
}

// ~ PROFESORES ACARGO DE LA ASIGNUTA

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
      <h1>Profesores:</h1>
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

// * FATHER
function DetailSubjets() {
  const [menu, setMenu] = useState(true);

  return (
    <section className='DetailSubject'>
      <section className='detailPresentation'>
        <h1>Sin Asignaturas</h1>
        <p>
          description de la asignatura
        </p>
      </section>
      <section className='detailDescription'>
        <div className='miniNavbar'>
          <button onClick={() => setMenu(true)}>Descripcion</button>
          <button onClick={() => setMenu(false)}>Profesores</button>
          <button>Interacciones</button>
        </div>
        {menu ? <AboutSubjets /> : <AuthorTeacher />}
      </section>
    </section>
  );
}

export default DetailSubjets;
