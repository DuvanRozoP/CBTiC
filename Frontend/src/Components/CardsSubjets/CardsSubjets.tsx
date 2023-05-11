import './CardsSubjets.css';
import CardSubjets from './CardSubjets/CardSubjets';

type arraySubjets = {
  description: string;
  img?: string;
};

interface PropsCardsSubjets {
  Titulo: string;
  subjets: arraySubjets[];
  onMouseEnter?: () => void;
}

function CardsSubjets({ Titulo, subjets,onMouseEnter  }: PropsCardsSubjets) {
  return (
    <section className='CardsSubjets'>
      <section className='TextCenter'>
        <h1>{Titulo}</h1>
        <section className='mapSubjets'>
          {subjets.map((subjet) => (
            <CardSubjets description={subjet.description} onMouseEnter={onMouseEnter}/>
          ))}
        </section>
      </section>
    </section>
  );
}

export default CardsSubjets;
