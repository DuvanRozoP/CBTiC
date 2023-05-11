import './Teacher.css';
import CardsSubjets from '../../Components/CardsSubjets/CardsSubjets';

const subjetsCalculo = [
  {
    description: 'Cálculo I',
  },
  {
    description: 'Cálculo II',
  },
  {
    description: 'Cálculo III',
  },
];
const subjetsFisica = [
  {
    description: 'Física I',
  },
  {
    description: 'Física II',
  },
  {
    description: 'Física III',
  },
];
const subjetsEd = [
  {
    description: 'Ecuaciones Diferenciales',
  },
];
function Teacher() {
  const handleMouseEnter = () => {
    return(<div>
      <h1>Hola</h1>
    </div>)
  };

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
          subjets={subjetsCalculo}
          onMouseEnter={handleMouseEnter}
        />
        <CardsSubjets
          Titulo='MULTIMEDIA FÍSICA'
          subjets={subjetsFisica}
          onMouseEnter={handleMouseEnter}
        />
        <CardsSubjets
          Titulo='MULTIMEDIA ECUACIONES DIFERENCIALES'
          subjets={subjetsEd}
          onMouseEnter={handleMouseEnter}
        />
      </section>
    </section>
  );
}

export default Teacher;
