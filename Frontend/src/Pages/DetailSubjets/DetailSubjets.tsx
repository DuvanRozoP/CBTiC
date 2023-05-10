import { useState } from 'react';
import './DetailSubjets.css';

import authorPredeterminate from '../../assets/icons/authorPredeterminate.png';

const Descripcion = [
  {
    Info: 'Este curso cuenta con cinco capítulos: Electrostática, Corriente eléctrica continua, Campo magnético, Inducción electromagnética y Ecuaciones de Maxwell. En cada uno de estos capítulos aparecen problemas resueltos y al final de cada uno de ellos se ha dispuesto de una colección de problemas propuestos. El texto incluye un producto multimedia',
    Temas: ['Ley de Faraday', 'Ley de Gauss'],
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
        <h1>Física III</h1>
        <p>Electromagnetismo</p>
      </section>
      <section className='detailDescription'>
        <div className='miniNavbar'>
          <button
            onClick={() => setMenu(true)}
            className={`${menu ? 'Active' : 'Disabled'}`}
          >
            Descripcion
          </button>
          <button onClick={() => setMenu(false)}>Profesores</button>
          <button>Interacciones</button>
        </div>
        {menu ? <AboutSubjets /> : <AuthorTeacher />}
      </section>
    </section>
  );
}

export default DetailSubjets;
