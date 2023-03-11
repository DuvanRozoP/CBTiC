import './Teacher.css';

import CardsSubjets from '../../Components/CardsSubjets/CardsSubjets';

const subjetsCalculo = [
  {
    description: 'Calculo I',
  },
  {
    description: 'Calculo II',
  },
  {
    description: 'Calculo III',
  },
];
const subjetsFisica = [
  {
  description: 'Fisica I',
  },
  {
  description: 'Fisica II',
  },
  {
  description: 'Fisica III',
  },
  ];

function Teacher() {
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
        <CardsSubjets Titulo='CALCULO' subjets={subjetsCalculo} />
        <CardsSubjets Titulo='FISICA' subjets={subjetsFisica} />
      </section>
    </section>
  );
}

export default Teacher;
