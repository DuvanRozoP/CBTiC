import './CardsSubjets.css';
import CardSubjets from './CardSubjets/CardSubjets';

type arraySubjets = {
  description: string;
  img?: string;
};

interface PropsCardsSubjets {
  Titulo: string;
  subjets: arraySubjets[];
}

function CardsSubjets({ Titulo, subjets }: PropsCardsSubjets) {
  return (
    <section className='CardsSubjets'>
      <h1>{Titulo}</h1>
      <section className='mapSubjets'>
        {subjets.map((subjet) => (
          <CardSubjets description={subjet.description} />
        ))}
      </section>
    </section>
  );
}

export default CardsSubjets;
