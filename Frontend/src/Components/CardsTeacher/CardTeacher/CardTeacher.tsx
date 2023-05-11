import './CardTeacher.css';
import predeterminate from '../../../assets/pretedeterminadoAsignature.webp';
import { Link } from 'react-router-dom';
interface PropsCardTeacher {
  description: string;
  img?: string;
  url:string;
}

function CardTeacher({ description, img = predeterminate, url }: PropsCardTeacher) {
  return (
    <section className='CardTeacher'>
      <Link to={url}>
        <img src={img} alt={description} />
      </Link>
      <p>{description}</p>
    </section>
  );
}

export default CardTeacher;
