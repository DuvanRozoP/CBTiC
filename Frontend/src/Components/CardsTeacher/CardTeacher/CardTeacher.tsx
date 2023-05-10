import './CardTeacher.css'
import predeterminate from '../../../assets/pretedeterminadoAsignature.webp';

interface PropsCardTeacher {
    description: string;
    img?: string;
}

function CardTeacher({ description, img = predeterminate }: PropsCardTeacher) {
    return (
      <section className='CardTeacher'>
          <img src={img} alt={description} />
      </section>
    );
}

export default CardTeacher;
