import './Login.css';
import AppCarousel from '../../Components/Carousel/Carousel';
function Login() {
  return (
    <section className='ContainerLogin'>
      <section>
        <img src='/src/assets/Presentation/Unimeta 2.png' />
        <section>
          <h2>Usuario:</h2>
          <input type='email' placeholder='Ingrese el usuario'/>
          <h2>Contraseña:</h2>
          <input type='password' placeholder='Ingrese la contraseña'/>
          <p>
            Haz Olvidado tu contraseña?, Haz click <a href=''>aqui</a>
          </p>
          <button className='BtnLogin'>Login</button>
        </section>
      </section>
      <section>
      <AppCarousel />
      </section>
    </section>
  );
}

export default Login;
