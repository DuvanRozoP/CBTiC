import CardsTeacher from '../../Components/CardsTeacher/CardsTeacher';
import './Teachers.css'

const Teacher = [
  {
    description: "Fisica",
  }
]
 

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
        <section className='Teachers'>
          <CardsTeacher Titulo={'Fidel Bautista'} Teachers={Teacher}></CardsTeacher>
          <CardsTeacher Titulo={'Fidel Bautista'} Teachers={Teacher}></CardsTeacher>
        </section>
      </section>
    )
}

export default Teachers;