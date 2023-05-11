import { useEffect, useState } from 'react';
import CardTeacher from './CardTeacher/CardTeacher';
import './CardsTeacher.css';
import { getcv } from '../../api/cv';

type arrayTeacher = {
  titulo: string;
  img?: string;
  url:string;
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
            <CardTeacher key={index} description={Teacher.titulo} img={Teacher.img} url={Teacher.url}/>
          ))}
      </section>
      <h1>{Titulo}</h1>
    </section>
  );
}

export default CardsTeacher;
