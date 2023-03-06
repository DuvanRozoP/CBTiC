import './Teacher.css';

function Teacher() {
  return (
    <section className='containerBook'>
      <section className='searchBax'>
        <h1>Departamento de Ciencias Basicas</h1>
        <div>
          <input type='text' placeholder='Materia que desea buscar' />
        </div>
      </section>
      <section className='subjets'>
        <h1>sin materias</h1>
      </section>
    </section>
  );
}

export default Teacher;
