import './Login.css';
import Slider from '../../Components/Slider/Slider';

const mockimgs = [
  "https://picsum.photos/id/1024/400",
  "https://picsum.photos/id/1020/400"
]
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
          <Slider imgs={mockimgs}></Slider>
      </section>
    </section>
  );
}

export default Login;
