import './Teacher.css';
import CardsSubjets from '../../Components/CardsSubjets/CardsSubjets';
import { getDetails } from '../../api/detail';
import { useState, useEffect } from 'react';
const subjetsEd = [
  {
    Asignatura: 'Ecuaciones Diferenciales',
  },
];
function Teacher() {
  const [subjetsFisica, setSubjetsFisica] = useState([]);
  const [subjectsCalculo, setSubjetsCalculo]  = useState([]);
  useEffect(() => {
    const fetchSubjets = async () => {
      try {
        const response = await getDetails();
        const calculoSubjets = response.filter((subject:any) => subject.Asignatura.startsWith('Cálculo'))
        const fisicaSubjects = response.filter((subject:any) => subject.Asignatura.startsWith('Física'));
        setSubjetsFisica(fisicaSubjects);
        setSubjetsCalculo(calculoSubjets);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubjets();
  }, []);
  console.log(subjetsFisica);
  return (
    <section className='containerBook'>
      <section className='searchBax'>
        <h1>Asignaturas</h1>
        <div>
          <input type='text' placeholder='Materia que desea buscar' />
          <button>x</button>
        </div>
      </section>
      <hr />
      <section className='subjets'>
        <CardsSubjets
          Titulo='MULTIMEDIA CÁLCULO'
          subjets={subjectsCalculo}
         
        />
        <CardsSubjets
          Titulo='MULTIMEDIA FÍSICA'
          subjets={subjetsFisica}
         
        />
        <CardsSubjets
          Titulo='MULTIMEDIA ECUACIONES DIFERENCIALES'
          subjets={subjetsEd}
        
        />
      </section>
    </section>
  );
}

export default Teacher;
