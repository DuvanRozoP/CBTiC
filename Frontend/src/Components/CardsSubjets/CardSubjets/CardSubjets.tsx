import './CardSubjets.css';

import predeterminate from '../../../assets/pretedeterminadoAsignature.webp';

interface PropsCardSubjects {
  description: string;
  img?: string;
}

function CardSubjets({ description, img = predeterminate }: PropsCardSubjects) {
  return (
    <section className='CardSubjets'>
      <img src={img} alt={description} />
      <div>{description}</div>
    </section>
  );
}

export default CardSubjets;
