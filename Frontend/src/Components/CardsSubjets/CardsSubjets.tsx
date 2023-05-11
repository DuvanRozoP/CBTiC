import './CardsSubjets.css';
import CardSubjets from './CardSubjets/CardSubjets';

export type arraySubjets = {
  Asignatura: string;
  img?: string;
  DescriptionAsignatura?: string;
  Descripcion?: {
    Info: string;
    Temas: string[];
  };
  Profesores?: {
    name: string;
    img?: string;
  }[];
  Interacciones?: {
    name: string;
    description: string;
    path: string;
  }[];
  Libros?: {
    name: string;
    description: string;
    autor: string;
  };
};

interface PropsCardsSubjets {
  Titulo: string;
  subjets: arraySubjets[];
}

function CardsSubjets({ Titulo, subjets  }: PropsCardsSubjets) {
  return (
    <section className='CardsSubjets'>
      <section className='TextCenter'>
        <h1>{Titulo}</h1>
        <section className='mapSubjets'>
          {subjets.map((subjet) => (
            <CardSubjets Asignatura={subjet.Asignatura} />
          ))}
        </section>
      </section>
    </section>
  );
}

export default CardsSubjets;
