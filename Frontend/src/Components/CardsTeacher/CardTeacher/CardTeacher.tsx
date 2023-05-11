import './CardTeacher.css'
import predeterminate from '../../../assets/pretedeterminadoAsignature.webp';

interface PropsCardTeacher {
    description: string;
    img?: string;
}

function CardTeacher({ description, img = predeterminate }: PropsCardTeacher) {
    console.log(description);
    return (
      <section className='CardTeacher'>
          <img src={img} alt={description} />
          <p>{description}</p>
      </section>
    );
}

export default CardTeacher;
