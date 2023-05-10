import CardTeacher from './CardTeacher/CardTeacher';
import './CardsTeacher.css';

type arrayTeacher = {
  description: string;
  img?: string;
};
interface PropsCardTeacher {
  Titulo: string;
  Teachers: arrayTeacher[];
}
function CardsTeacher({ Titulo, Teachers }: PropsCardTeacher) {
  return (
    <section className='CardsTeacher'>
      <section className='Cardimg'>
          {Teachers.map((Teacher, index) => (
            <CardTeacher key={index} description={Teacher.description} img={Teacher.img}/>
          ))}
      </section>
      <h1>{Titulo}</h1>
    </section>
  );
}

export default CardsTeacher;
