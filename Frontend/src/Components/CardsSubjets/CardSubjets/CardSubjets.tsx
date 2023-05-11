import './CardSubjets.css';

import predeterminate from '../../../assets/pretedeterminadoAsignature.webp';
import { Link } from 'react-router-dom';

interface PropsCardSubjects {
  description: string;
  img?: string;
  onMouseEnter?: () => void;
}

function CardSubjets({ description, img = predeterminate,onMouseEnter }: PropsCardSubjects) {
  return (
    <section className='CardSubjets' onMouseEnter={onMouseEnter}>
      <Link to={`/detailsubjets/${description}`} > 
        <img src={img} alt={description} />
        <div>{description}</div>
      </Link>
    </section>
  );
}

export default CardSubjets;
