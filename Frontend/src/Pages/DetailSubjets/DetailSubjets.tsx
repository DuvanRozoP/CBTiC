import { useState, useEffect } from 'react';
import './DetailSubjets.css';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../api/detail';
import authorPredeterminate from '../../assets/icons/authorPredeterminate.png';
import Faraday from '../../assets/Presentation/WhatsApp Image 2023-05-10 at 4.20.10 PM.jpeg';
import Onda from '../../assets/Presentation/WhatsApp Image 2023-05-10 at 6.06.34 PM.jpeg'
function AboutSubjets(props: { subject: any }) {
  const { subject } = props;
  return (
    <section className='descriptionCurso'>
      {subject && (
        <>
          <h1>Sobre este curso</h1>
          <p>{subject.Descripcion.Info}</p>
          <br />
          <h1>Temas</h1>
          {subject.Descripcion.Temas.map((tema: any, indexTema: number) => {
            return (
              <div key={indexTema} className='TemaCard'>
                <h3>{indexTema + 1}</h3>
                <p>{tema}</p>
              </div>
            );
          })}
        </>
      )}
    </section>
  );
}

// ~ PROFESORES ACARGO DE LA ASIGNATURA

function AuthorTeacher(props: { subject: any }) {
  const { subject } = props;
  return (
    <section className='authorTeacher'>
      <h1>Profesores</h1>
      <div className='cardsTeacher'>
        {subject.Profesores.map((element: any) => {
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
function AboutInteracciones(props: { subject: any }) {
  const { subject } = props;
  console.log(subject);
  return (
    <section className='AboutInteracciones'>
      <h1>Interacciones</h1>
      <div className='ContentdCard'>
        {subject.Interacciones.map((element: any, index:number) => {
          let imgSrc = index % 2 === 0 ? Onda : Faraday;
          return (
            <section className='CardInteraccion'>
              <img src={imgSrc} alt='' />
              <h3>{element.name}</h3>
            </section>
          );
        })}
      </div>
    </section>
  );
}
// * FATHER
function DetailSubjets() {
  const [menu, setMenu] = useState('descripcion');
  const description = useParams();
  const [subject, setSubject] = useState<any>();
  useEffect(() => {
    const fetchSubjets = async () => {
      try {
        const response = await getDetails();
        for (let i = 0; i < response.length; i++) {
          if (response[i].Asignatura == description.subjectId) {
            setSubject(response[i]);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchSubjets();
  }, []);
  return (
    <section className='DetailSubject'>
      {subject && (
        <>
          <section className='detailPresentation'>
            <h1>{subject.Asignatura}</h1>
            <p>{subject.DescriptionAsignatura}</p>
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
                className={`${
                  menu === 'interacciones' ? 'Active' : 'Disabled'
                }`}
              >
                Interacciones
              </button>
            </div>
            {menu === 'descripcion' && <AboutSubjets subject={subject} />}
            {menu === 'profesores' && <AuthorTeacher subject={subject} />}
            {menu === 'interacciones' && (
              <AboutInteracciones subject={subject} />
            )}
          </section>
        </>
      )}
    </section>
  );
}

export default DetailSubjets;
