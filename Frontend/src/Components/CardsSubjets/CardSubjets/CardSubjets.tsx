import './CardSubjets.css';

import predeterminate from '../../../assets/pretedeterminadoAsignature.webp';
import { Link } from 'react-router-dom';

interface PropsCardSubjects {
  description: string;
  img?: string;
}

function CardSubjets({ description, img = predeterminate }: PropsCardSubjects) {
  return (
    <section className='CardSubjets'>
      <Link to="/detailsubjets" > 
        <img src={img} alt={description} />
        <div>{description}</div>
      </Link>
    </section>
  );
}

export default CardSubjets;
