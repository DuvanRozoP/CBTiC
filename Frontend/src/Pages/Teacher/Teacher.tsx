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
  {
    description: 'Calculo IV',
  },
  {
    description: 'Calculo II',
  },
  {
    description: 'Calculo III',
  },
  {
    description: 'Calculo IV',
  },
  {
    description: 'Calculo II',
  },
  {
    description: 'Calculo III',
  },
  {
    description: 'Calculo IV',
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
  {
  description: 'Fisica IV',
  },
  {
  description: 'Fisica II',
  },
  {
  description: 'Fisica III',
  },
  {
  description: 'Fisica IV',
  },
  {
  description: 'Fisica II',
  },
  {
  description: 'Fisica III',
  },
  {
  description: 'Fisica IV',
  },
  ];

function Teacher() {
  return (
    <section className='containerBook'>
      <section className='searchBax'>
        <h1>Departamento de Ciencias Basicas</h1>
        <div>
          <input type='text' placeholder='Materia que desea buscar' />
          <button>x</button>
        </div>
      </section>
      <hr />
      <section className='subjets'>
        <CardsSubjets Titulo='CALCULO' subjets={subjetsCalculo} />
        <CardsSubjets Titulo='FiSICA' subjets={subjetsFisica} />
      </section>
    </section>
  );
}

export default Teacher;
