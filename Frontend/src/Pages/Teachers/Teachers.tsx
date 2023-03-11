import './Teachers.css'

function Teachers(){
    return (
        <section className='containerBook'>
        <section className='searchBax'>
          <h1>Profesores</h1>
          <div>
            <input type='text' placeholder='Buscar Profesor' />
            <button>x</button>
          </div>
        </section>
        <hr />
        <div className='containerInfo'>
            <img src="" alt=""/>
            <h1>Fidel Bautista</h1>
            <h4>Fisico</h4>
        </div>
      </section>
    )
}

export default Teachers;