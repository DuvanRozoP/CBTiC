import { useState } from 'react';
import './DetailSubjets.css';

import authorPredeterminate from '../../assets/icons/authorPredeterminate.png';

function AboutSubjets() {
  return (
    <section className='descriptionCurso'>
      <h1>Sobre este curso</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, explicabo praesentium provident non illum accusamus repellendus saepe sit maxime veritatis, molestias distinctio obcaecati nobis et mollitia totam fugiat. Vitae, laudantium.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatibus voluptas voluptatem doloremque odio dolores nesciunt aliquam minus dignissimos. Id at eligendi nostrum! Rem illo ipsa non voluptatibus qui beatae!
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
          <button onClick={() => setMenu(true)} className={`${menu ? 'Active' : 'Disabled'}`}>Descripcion</button>
          <button  onClick={() => setMenu(false)}  >Profesores</button>
          <button>Interacciones</button>
        </div>
        {menu ? <AboutSubjets /> : <AuthorTeacher />}
      </section>
    </section>
  );
}

export default DetailSubjets;
