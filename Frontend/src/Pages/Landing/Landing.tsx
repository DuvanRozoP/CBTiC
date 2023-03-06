import './Landing.css';

import imagen from '../../assets/Presentation/unimetaVector.png';
import logo from '../../assets/Presentation/Logo CBTic 1.png';

function Landing() {
  return (
    <section className='containerLanding'>
      <div className='presentation'>
        <img src={logo} alt={logo} />
        <img src={imagen} alt={imagen} />
      </div>
      <div className='info'>
        <div>
          <h1>mision</h1>
          <p>
            Aca colocariamos severa mision si tan solo tuvieramos uno de
            mientras le dejo este bonito mensaje.el logo aun esta en fase de
            desarrollo
          </p>
        </div>
        <div>
          <h1>vision</h1>
          <p>
            Aca tampoco tenemos vision asi que por favor solititamos ayuda para
            poder obtener informacion
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landing;
