import { useEffect, useState } from 'react';
import CardsTeacher from '../../Components/CardsTeacher/CardsTeacher';
import { getcvteacher } from '../../api/cv';
import './Teachers.css'

const Teacher = [
  {
    description: "Fisica",
  }
]

function Teachers(){
  const [subject, setSubject] = useState<any>();
  useEffect(() => {
    const fetchSubjets = async () => {
      try {
        const response = await getcvteacher();
        setSubject(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubjets();
  }, []);
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
        {subject && (
        <>
          {subject.map((element:any)=>{
            return(
              <CardsTeacher Titulo={element.name}  Teachers={[element]}></CardsTeacher>
            )
          })}
          </>)}
        </section>
      </section>
    )
}

export default Teachers;