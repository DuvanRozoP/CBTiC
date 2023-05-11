import { useState, useEffect } from 'react';
import './DetailSubjets.css';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../api/detail';
import authorPredeterminate from '../../assets/icons/authorPredeterminate.png';
import Faraday from '../../assets/Presentation/WhatsApp Image 2023-05-10 at 4.20.10 PM.jpeg';
import image from '../../../../Backend/src/public/imgCv/Fidel_Bautista_Rodríguez_Puertas.png'
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

function AuthorTeacher(props: { subject: any }) {
  const { subject } = props;
  return (
    <section className='authorTeacher'>
      <h1>Profesores</h1>
      <div className='cardsTeacher'>
        {subject.Profesores.map((element:any) => {
          return (
            <section key={element.name} className='cardTeacher'>
              <img src={image} alt={element.name} />
              <h1>{element.name}</h1>
            </section>
          );
        })}
      </div>
    </section>
  );
}
function AboutInteracciones() {
  return (
    <section className='AboutInteracciones'>
      <h1>Interacciones</h1>
      <div className='CardInteraccion'>
        <img src={Faraday} alt='' />
        <div>
          <h3>Ley de Faraday</h3>
        </div>
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
