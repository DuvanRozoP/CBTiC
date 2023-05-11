import './CardSubjets.css';
import predeterminate from '../../../assets/pretedeterminadoAsignature.webp';
import { Link } from 'react-router-dom';
import { arraySubjets } from '../CardsSubjets';
interface PropsCardSubjects {
  Asignatura: string;
  img?: string;
  onMouseEnter?: () => void;
}

function CardSubjets({ Asignatura, img = predeterminate }: PropsCardSubjects) {
  return (
    <section className='CardSubjets'>
      <Link to={`/detailsubjets/${Asignatura}`} > 
        <img src={img} alt={Asignatura} />
        <div>{Asignatura}</div>
      </Link>
    </section>
  );
}

export default CardSubjets;
